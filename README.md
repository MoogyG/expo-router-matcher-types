# expo-router/testing-library matcher types

Minimal reproduction: the Jest matchers of `expo-router/testing-library` run, but `tsc` rejects them.

```sh
npm ci
npm test           # passes: the matchers are registered at runtime
npm run typecheck  # fails: TS2339 Property 'toHavePathname' does not exist on type 'JestMatchers<Screen>'
```

Adding `/// <reference types="expo-router/build/ts-declarations/expect" />` at the top of `__tests__/router.test.tsx` makes `npm run typecheck` pass.
