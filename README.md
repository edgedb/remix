# Hyperpop — The EdgeDB Remix Stack

![The Hyperpop Remix Stack](https://user-images.githubusercontent.com/3084745/167937035-b84dda16-617f-456f-923e-dafcb4a6697c.png)

Learn more about [Remix Stacks](https://remix.run/stacks).

## What's in the stack

- [EdgeDB](https://www.edgedb.com) for the database
- Deployment on [Fly](https://fly.io)
  - Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- [GitHub Actions](https://github.com/features/actions)
- Email/password authentication with [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
- [Tailwind](https://tailwindcss.com/)
- [Cypress](https://cypress.io)
- [MSW](https://mswjs.io) (request mocking)
- [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- [Prettier](https://prettier.io)
- [ESLint](https://eslint.org)
- [TypeScript](https://typescriptlang.org)

### Other EdgeDB + Remix stacks

Not a fan of bits of the stack? Fork it and make it your own! Or use one of these other community-maintained stacks that combine the gloriousness of EdgeDB and Remix:

- [jkcorrea/remix-chop-suey-stack](https://github.com/jkcorrea/remix-chop-suey-stack)
- [jacob-ebey/remix-edgedb](https://github.com/jacob-ebey/remix-edgedb)

## Development

> View the live application: [https://edgedb-remix.fly.dev](https://edgedb-remix.fly.dev/)

### 1. Scaffold your project

```sh
npx create-remix --template edgedb/remix
```

### 2. Initialize an EdgeDB project

If you haven't already, install the `edgedb` CLI: [edgedb.com/install](https://www.edgedb.com/install). Then run the following command from inside your project directory.

```sh
edgedb project init
```

This will install the latest version of EdgeDB, spin up an instance, and apply all migrations from `dbschema/migrations`.

### 3. Seed the database

```sh
npm run seed
```

This creates some sample notes and an initial user with the following credentials:

- email `root@remix.run`
- password: `remix+edgedb=awesome`

### 4. Create `.env`

This project uses cookie-based authentication that relies on a secret token. It isn't secure to hard-code this value directly into your source code, so we'll use an environment variables called `SESSION_STATE`. To set this variable in development, create a `.env` file and add the following line. Remix automatically loads environment variables from this file when running in development mode.

```
SESSION_SECRET="super-duper-s3cret"
```

In the Deployment section, we'll describe how to set a value for `SESSION_SECRET` in production. We also set this variable in `deploy.yml` so it's available when running end-to-end tests in GitHub Actions.

### 5. Start the server

This starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Go to [localhost:3000](http://localhost:3000), click "Sign up" to create a new account, and explore the application.

## Deployment

This Remix Stack comes with two GitHub Actions that handle automatically deploying your app to production and staging environments.

Prior to your first deployment, you'll need to do a few things:

### 1. Install the [Fly CLI](https://fly.io/docs/getting-started/installing-flyctl/) and signup/login

```sh
fly auth signup     # sign up
fly auth login      # login
```

> **Note:** If you have more than one Fly account, ensure that you are signed into the same account in the Fly CLI as you are in the browser. In your terminal, run `fly auth whoami` and ensure the email matches the Fly account signed into the browser.

### 2. Create a Fly app for your application

Run `fly launch --no-deploy` to create a new Fly app. You'll be prompted for an app name; if you leave this blank, a name will be generated for you.

```sh
$ fly launch --no-deploy
An existing fly.toml file was found for app "edgedb-remix"
? Would you like to copy its configuration to the new app? Yes
Creating app in /path/to/project
Scanning source code
Detected a Dockerfile app
? App Name (leave blank to use an auto-generated name):
Automatically selected personal organization
? Select region: sea (Seattle, Washington (US))
Created app <random name> in organization personal
Wrote config file fly.toml
Your app is ready. Deploy with `flyctl deploy`
```

Once the app has been created the existing `fly.toml` file will be overwritten with the newly created app's information (this is intentional).

### 3. Deploy an EdgeDB instance to Fly

Follow EdgeDB's [Fly.io deployment guide](https://www.edgedb.com/docs/guides/deployment/fly_io) for step-by-step instructions. At the end of this process, you will have a [DSN](https://www.edgedb.com/docs/reference/connection) which can be used to connect to the instance. It should have the following form:

`edgedb://<user>:<password>@<hostname>:<port>`

Add this value to your application as a [Fly secret](https://fly.io/docs/reference/secrets/) called `EDGEDB_DSN`.

```sh
fly secrets set EDGEDB_DSN=<paste DSN here>
```

### 4. Add a `SESSION_SECRET` to your Fly app secrets

To do this you can run the following commands:

```sh
fly secrets set SESSION_SECRET=$(openssl rand -hex 32)
```

If you don't have `openssl` installed, feel free to use any tool that will generate a random string, like a password manager or online tool.

### 5. Initialize a Git repo

Create a new [GitHub Repository](https://repo.new) and Copy the provided `git@github.com:<reponame>.git` URL. Then execute the following commands. Don't `git push` yet—we have a bit more configuration to do first.

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <paste git url here>
```

### 6. Add a `FLY_API_TOKEN` to your GitHub repo

To do this, [generate a token](https://web.fly.io/user/personal_access_tokens/new) via the Fly dashboard, copy it, and add it to to your repo via `Settings > Secrets > Actions`. Click "New repository secret", name it `FLY_API_TOKEN`, and paste the generated token.

### 7. Push to GitHub

Now we're ready to push this to GitHub. This will start the deployment process via GitHub Actions.

```sh
git push -u origin main
```

Every commit to your `main` branch will trigger a re-deployment to your production environment.

  <!-- , and every commit to your `dev` branch will trigger a deployment to your staging environment. -->

<!-- ### Connecting to your database -->

<!-- The sqlite database lives at `/data/sqlite.db` in your deployed application. You can connect to the live database by running `fly ssh console -C database-cli`. -->

### 8. View the final deployment

Once the GitHub Actions have completed, your application should be live on the internet! Fly automatically provides a public-facing URL for your application: `<appname>.fly.dev`. Visit this URL for a fully-functional cloud hosted version of the application.

Check your `fly.toml` file for your app name, or go to the [Fly dashboard](https://fly.io/dashboard) to see more information about the application.

> **Getting Help with Deployment**
>
> If you run into any issues deploying to Fly, make sure you've followed all of the steps above carefully. Go to the [Fly dashboard](https://fly.io/dashboard) and view the deployment logs; this will often be helpful for debugging. If you're still having issues [open an issue](https://github.com/edgedb/remix/issues/new) on the `edgedb/remix` repo.

## GitHub Actions

We use GitHub Actions for continuous integration and deployment. Anything that gets into the `main` branch will be deployed to production after running tests/build/etc. Anything in the `dev` branch will be deployed to staging.

## Project structure

This is a pretty simple note-taking app, but it's a good example of how you can build a full stack app with EdgeDB and Remix. The main functionality is creating users, logging in and out, and creating and deleting notes.

- creating users, and logging in and out [./app/models/user.server.ts](./app/models/user.server.ts)
- user sessions, and verifying them [./app/session.server.ts](./app/session.server.ts)
- creating, and deleting notes [./app/models/note.server.ts](./app/models/note.server.ts)

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. As you make changes, add to an existing file or create a new file in the `cypress/e2e` directory to test your changes.

We use [`@testing-library/cypress`](https://testing-library.com/cypress) for selecting elements on the page semantically.

To run these tests in development, run `npm run test:e2e:dev` which will start the dev server for the app as well as the Cypress client. Make sure the database is running in docker as described above.

We have a utility for testing authenticated features without having to go through the login flow:

```ts
cy.login();
// you are now logged in as a new user
```

We also have a utility to auto-delete the user at the end of your test. Just make sure to add this in each test file:

```ts
afterEach(() => {
  cy.cleanupUser();
});
```

That way, we can keep your local db clean and keep your tests isolated from one another.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
