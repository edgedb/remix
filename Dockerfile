# pull in EdgeDB CLI
FROM edgedb/edgedb AS edgedb


# base node image
FROM node:16-bullseye-slim as base
# set for base and all layer that inherit from it
ENV NODE_ENV production
ENV PORT 8080
ENV EDGEDB_CLIENT_TLS_SECURITY insecure
# Install openssl
RUN apt-get update && apt-get install -y openssl sqlite3


# Install all node_modules, including dev dependencies
FROM base as deps
WORKDIR /myapp
ADD package.json package-lock.json ./
RUN npm install --production=false


# Setup production node_modules
FROM base as production-deps
WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json package-lock.json ./
RUN npm prune --production


# Build the app
FROM base as build
WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules
# ADD prisma .
# RUN npx prisma generate
# for now, query builder is checked into Git
# ADD dbschema .
# RUN npx edgeql-js
ADD . .
RUN npm run build


# Finally, build the production image with minimal footprint
FROM base
# ENV DATABASE_URL=file:/data/sqlite.db
# ENV PORT 8080
# add shortcut for connecting to database CLI
# RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli
WORKDIR /myapp
COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=edgedb /usr/bin/edgedb /usr/bin/edgedb
# COPY --from=build /myapp/node_modules/.prisma /myapp/node_modules/.prisma
COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
COPY --from=build /myapp/package.json /myapp/package.json
COPY --from=build /myapp/dbschema/migrations /myapp/dbschema/migrations
COPY --from=build /myapp/start.sh /myapp/start.sh


CMD ["npm", "start"]
