# The EdgeDB Remix Stack — Indiepop

![The Remix Indiepop Stack](https://repository-images.githubusercontent.com/465928257/a241fa49-bd4d-485a-a2a5-5cb8e4ee0abf)

Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix --template edgedb/remix
```

## What's in the stack

- [EdgeDB](https://www.edgedb.com) for the database
- Deployment on [Fly](https://fly.io) with [Docker](https://www.docker.com/)
- Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- [GitHub Actions](https://github.com/features/actions) for deployment on merge to production and staging environments
- Email/password authentication with [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
- Styling with [Tailwind](https://tailwindcss.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Local third-party request mocking with [MSW](https://mswjs.io)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static types with [TypeScript](https://typescriptlang.org)

Not a fan of bits of the stack? Fork it, change it, and use `npx create-remix --template your/repo`! Make it your own.

## Quickstart

Click this button to create a [Gitpod](https://gitpod.io) workspace with the project set up and Fly pre-installed

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Development

- Scaffold your project

  ```sh
  npx create-remix --template edgedb/remix
  ```

- Install the `edgedb` CLI: [edgedb.com/install](https://www.edgedb.com/install)

- Initialize an EdgeDB project

  ```sh
  edgedb project init
  ```

  This will install the latest version of EdgeDB, spin up an instance, and apply all migrations from `dbschema/migrations`.

- Seed the database

  ```sh
  npm run seed
  ```

  This creates some sample notes and an initial user with the following credentials:

  - email `root@remix.run`
  - password: `remix+edgedb=awesome`

- Start dev server:

  This starts your app in development mode, rebuilding assets on file changes.

  ```sh
  npm run dev
  ```

  Go to [localhost:3000](http://localhost:3000), click "Sign up" to create a new account, and explore the application.

### Relevant code:

This is a pretty simple note-taking app, but it's a good example of how you can build a full stack app with EdgeDB and Remix. The main functionality is creating users, logging in and out, and creating and deleting notes.

- creating users, and logging in and out [./app/models/user.server.ts](./app/models/user.server.ts)
- user sessions, and verifying them [./app/session.server.ts](./app/session.server.ts)
- creating, and deleting notes [./app/models/note.server.ts](./app/models/note.server.ts)

## Deployment

This Remix Stack comes with two GitHub Actions that handle automatically deploying your app to production and staging environments.

Prior to your first deployment, you'll need to do a few things:

- Install the [Fly CLI](https://fly.io/docs/getting-started/installing-flyctl/) and signup/login

  ```sh
  fly auth signup     # sign up
  fly auth login      # login
  ```

  > **Note:** If you have more than one Fly account, ensure that you are signed into the same account in the Fly CLI as you are in the browser. In your terminal, run `fly auth whoami` and ensure the email matches the Fly account signed into the browser.

- Create a Fly app for your application

  Run `fly launch --no-deploy` to create a new Fly app. You'll be prompted for an app name; if you leave the prompt blank a name will be generated for you.

  ```sh
  $ fly launch --no-deploy
  An existing fly.toml file was found for app edgedb-remix
  ? Would you like to copy its configuration to the new app? Yes
  Creating app in /path/to/project
  Scanning source code
  Detected a Dockerfile app
  ? App Name (leave blank to use an auto-generated name):
  Automatically selected personal organization: Colin McDonnell
  ? Select region: sea (Seattle, Washington (US))
  Created app old-thunder-7624 in organization personal
  Wrote config file fly.toml
  ? Would you like to setup a Postgresql database now? No
  ? Would you like to deploy now? No
  Your app is ready. Deploy with `flyctl deploy`
  ```

  Once the app has been created the existing `fly.toml` file will be overwritten with the newly created app's information; this is intentional.

  You'll be presented with a series of prompts. Answer `No` if asked whether to deploy a database or deploy the application. Once completed, the command will generate a `fly.toml` file for your application.

- Deploy an EdgeDB instance to Fly

  Follow EdgeDB's [Fly.io deployment guide](https://www.edgedb.com/docs/guides/deployment/fly_io) for step-by-step instructions. At the end of this process, you will have a [DSN](https://www.edgedb.com/docs/reference/connection) which can be used to connect to the instance. It should have the following form:

  `edgedb://<user>:<password>@<hostname>:<port>`

  Add this value to your application as a [Fly secret](https://fly.io/docs/reference/secrets/) called `EDGEDB_DSN`.

  ```sh
  fly secrets set EDGEDB_DSN=<paste DSN here> --app $APPNAME
  ```

- Initialize a Git repo

  Create a new [GitHub Repository](https://repo.new). Copy the provided `git@github.com:<reponame>.git` URL, then initialize the repo locally, set the remote, and create an initial commit. **Do not push your app yet!**

  ```sh
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin <ORIGIN_URL>
  ```

- Add a `FLY_API_TOKEN` to your GitHub repo. To do this, go to your user settings on Fly and create a new [token](https://web.fly.io/user/personal_access_tokens/new), then add it to [your repo secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) with the name `FLY_API_TOKEN`.

- Add a `SESSION_SECRET` to your Fly app secrets. This wi to do this you can run the following commands:

  ```sh
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32)
  ```

  If you don't have `openssl` installed, feel free to use any tool that will generate a random string, like a password manager or online tool.

- Push to GitHub

  Push to the `main` branch to deploy the app with GitHub Actions.

  ```sh
  git push -u origin main
  ```

  Every commit to your `main` branch will trigger a re-deployment to your production environment.

  <!-- , and every commit to your `dev` branch will trigger a deployment to your staging environment. -->

<!-- ### Connecting to your database -->

<!-- The sqlite database lives at `/data/sqlite.db` in your deployed application. You can connect to the live database by running `fly ssh console -C database-cli`. -->

### Getting Help with Deployment

If you run into any issues deploying to Fly, make sure you've followed all of the steps above and if you have, then post as many details about your deployment (including your app name) to [the Fly support community](https://community.fly.io). They're normally pretty responsive over there and hopefully can help resolve any of your deployment issues and questions.

## GitHub Actions

We use GitHub Actions for continuous integration and deployment. Anything that gets into the `main` branch will be deployed to production after running tests/build/etc. Anything in the `dev` branch will be deployed to staging.

## Testing

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
