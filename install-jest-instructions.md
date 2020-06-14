# Install Jest

## Introduction:

You should able to have Jest up and running by through steps 1-7. Step 8 is an optional clean-up step. If you would like to install a Jest/Karma hybrid, you can also leave `karma.conf.js` in, and rename `test.ts` to something like `karmaTest.ts`.

## Steps:

1. Remove karma & jasmine stuff with 
`npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter`

2. Install `npm install --save-dev jest jest-preset-angular @types/jest` 

3. Create `setup-jest.ts` to project root and add the following:
```ts 
import 'jest-preset-angular';
```

4. Create `jest.config.js` in project root and add the following:
```ts
module.exports = {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
        "<rootDir>/setup-jest.ts"
    ],
    "transformIgnorePatterns": [
        "node_modules/(?!@ngrx|ngx-socket-io)" // Last any packages here that error
    ],
    "transform": {
        "^.+\\.(ts|js|html)$": "ts-jest"
    },
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/",
        "<rootDir>/src/test.ts",
    ]
};
```

5. Add the following `types` array to `compilerOptions` in `tsconfig.json`:
```json
    "compilerOptions": {
        "types": [
            "jest"
        ]
    }
```

6. Replace `jasmine` with `jest` in `types` array of `compilerOptions` in `tsconfig.spec.json`:
```json
"compilerOptions": {
    "types": [
        "jest",
        "node"
    ],
}
```

7. Add jest scripts to `package.json`:
```json
"scripts": { 
    "test": "jest",
    "test-watch": "jest --watch"
}
```

8. _(Optional)_ Remove `karma.conf.js` and `test.ts`
`rm ./karma.conf.js ./src/test.ts`
