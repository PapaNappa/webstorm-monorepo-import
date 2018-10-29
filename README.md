# WebstormMonorepoImport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Reproduce

```
ng new --createApplication=false webstorm-monorepo-import
cd webstorm-monorepo-import
ng g library lib1
ng g library lib2
```

(Optional): Include an `@scope/` prefix in the package names to test the behaviour with scopes (currently there is no difference).

Finally, build lib1:

```
npm run build:lib1
```

## Expected behaviour

Auto-import of `Lib1Service` in `lib2.service.ts` uses `@scope/lib1`.

This import path is already recognised by Webstorm, see the import of `Lib1Module` in `lib2.module.ts`.
Only the auto-import uses relative paths.
