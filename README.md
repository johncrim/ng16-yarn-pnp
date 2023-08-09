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

4. Add a library
```
yarn ng g library mylib
```

5. Try building the library
```
❯ yarn ng build mylib
Building Angular Package
Cannot find package '@angular/compiler-cli' imported from src\ng16-yarn-pnp\.yarn\__virtual__\ng-packagr-virtual-fa520e598e\0\cache\ng-packagr-npm-13.1.2-a4236d0e43-5c40f95760.zip\node_modules\ng-packagr\lib\utils\ng-compiler-cli.js
Did you mean to import @angular-compiler-cli-virtual-759efba812/0/cache/@angular-compiler-cli-npm-13.1.1-a3378c32eb-2c9f958b04.zip/node_modules/@angular/compiler-cli/bundles/index.js?
```

6. Add an app
```
yarn ng g application myapp
```

7. Try building the app
```
❯ yarn ng build myapp
❯ yarn ng build myapp
An unhandled exception occurred: Cannot find package '@angular/compiler-cli' imported from src\ng16-yarn-pnp\.yarn\__virtual__\@angular-devkit-build-angular-virtual-0b6cfeb8e3\0\cache\@angular-devkit-build-angular-npm-13.1.2-dd6ab16ee6-3358052985.zip\node_modules\@angular-devkit\build-angular\src\utils\load-esm.js
Did you mean to import @angular-compiler-cli-virtual-759efba812/0/cache/@angular-compiler-cli-npm-13.1.1-a3378c32eb-2c9f958b04.zip/node_modules/@angular/compiler-cli/bundles/index.js?
```
