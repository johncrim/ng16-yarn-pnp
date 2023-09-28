# Ng16YarnPnp

This is a starter project test for [using Yarn PnP with Angular 16](https://github.com/angular/angular-cli/issues/16980).

## Project Creation

Created via:

1.
```bash
mkdir ng16-yarn-pnp
cd ng16-yarn-pnp
yarn set version berry
mv .\package.json _package.json # Needed so that the yarn pnp package.json isn't in the way
yarn dlx --package @angular/cli ng new ng16-yarn-pnp --directory=. --package-manager=yarn --create-application=false --minimal --commit=false
```

2. Then, move the contents of `_package.json` to `package.json`, and delete `_package.json`.

3. Update .gitignore per: https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored
(I used the zero-install .gitignore)

4. Commit everything thus far

5. Add a library
```bash
yarn ng g library mylib
```

and commit it.

6. Add an app
```bash
yarn ng g application myapp
```

7. Install the VS Code files for Yarn PnP integration

```bash
yarn dlx @yarnpkg/sdks vscode
```

and commit the changes.

Then, open a *.ts file, press `ctrl + shift + p`, type/select "Select TypeScript Version", then pick "Use Workspace Version".

More info: https://yarnpkg.com/getting-started/editor-sdks#vscode

8. Run it in VS Code (F5)

## Running It

```bash
git clone git@github.com:johncrim/ng16-yarn-pnp.git
cd ng16-yarn-pnp
yarn start
```

WOAAA!! #mind-blown

## Updating Dependencies

To update Angular dependencies, which runs Angular migrations:

1. Make sure there are no git changes (if there are, `git stash` them)
2. ` yarn dlx -p @angular/cli ng update @angular/cli`
REVIEW: Currently this doesn't work with Yarn PNP, so we have to run migrations manually.
3. Commit changes in single update commit (eg `chore(ng update): ng dependencies`)

To update other dependencies:

1. Make sure there are no git changes (if there are, `git stash` them). This is not strictly required, but is a good idea.
2. `yarn upgrade-interactive`
3. Choose the packages + versions to upgrade
5. Commit changes in single update commit (eg `chore(deps): update dependencies`)
