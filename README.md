# Ng16YarnPnp

This is a minimal test for [using Yarn PnP with Angular 16](https://github.com/angular/angular-cli/issues/16980).

Created via:

1.
```
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
```
yarn ng g library mylib
```

and commit it.

6. Add an app
```
yarn ng g application myapp
```

and commit it.
