# Setup Boilerplate

1. create repo
2. clone
3. cd into
4. npm init

   - test: mocha —no-timeouts

5. `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node`

6. install Prettier and Eslint Extensions through VS Code

   1. Go to VSC Settings
   1. Search Save => Format on Save
   1. Search ESLint => Always show status
   1. Search Prettier => add path: `.prettierrc`
   1. Search Prettier semi => semi-colons - check
   1. Search Prettier single => single quotes - check
   1. Search Prettier arrow parens => parens - check

7. `npx install-peerdeps --dev eslint-config-airbnb`

- [eslint-config-airbnb - npm](https://www.npmjs.com/package/eslint-config-airbnb)
  - [Airbnb Style Guide](https://github.com/airbnb/javascript)

8. Create a `.prettierrc` file
   - Add rules from [Prettier Options](https://prettier.io/docs/en/options.html)

```json
{
"singleQuotes": true,
"arrowParens": "always",
"semi": false
}
```

9. `npm i -g eslint` || `sudo npm i -g eslint`
10. `eslint init` && Walk through the steps
11. in the `.eslint.json` file

```json
{
"extends": ["airbnb", "prettier", "plugin:node/recommended"],
"plugins": ["prettier"],
"rules": {
"prettier/prettier": "error",
"no-unused-vars": "error",
"no-console": "warn",
"func-names": "off",
"object-shorthand": "warn",
"class-methods-use-this": "warn"
}
}
```
- [ESLint Rules](https://eslint.org/docs/rules/)