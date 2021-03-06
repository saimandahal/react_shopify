module.exports = {
  "env": {
      "node": true,
      "browser": true,
      "mocha": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "plugins": ["react"],
  "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 6,
      "ecmaFeatures":{
          "experimentalObjectRestSpread": true,
          "arrowFunctions": true,
          "binaryLiterals": true,
          "blockBindings": true,
          "classes": true,
          "defaultParams": true,
          "destructuring": true,
          "forOf": true,
          "generators": true,
          "modules": true,
          "objectLiteralComputedProperties": true,
          "objectLiteralDuplicateProperties": true,
          "objectLiteralShorthandMethods": true,
          "objectLiteralShorthandProperties": true,
          "octalLiterals": true,
          "spread": true,
          "templateStrings": true,
          "globalReturn": true, // React JSX support
          "jsx": true
      },
  },
  "rules": {
      "camelcase": 2,
      "comma-dangle": 2,
      "comma-style": [2, "last"],
      "consistent-this": [2, "self"],
      "curly": [2, "all"],
      "eol-last": 2,
      "eqeqeq": 2,
      "func-names": 2,
      "indent": [2, 2],
      "max-len": [2, 200, 2], // 2 spaces per tab, max 120 chars per line
      "new-cap": 2,
      "no-array-constructor": 2,
      "no-inner-declarations": [2, "both"],
      "no-mixed-spaces-and-tabs": 2,
      "no-new-object": 2,
      "no-shadow-restricted-names": 2,
      "no-trailing-spaces": [2, { "skipBlankLines": false }],
      "no-underscore-dangle": 0, // dangling underscores are fine
      "one-var": 2,
      "quotes": [2, "single", "avoid-escape"],
      "quote-props": [2, "consistent-as-needed"],
      "radix": 2,
  
      "semi": [2, "always"],
      "space-before-blocks": [2, "always"],
      "space-infix-ops": 2,
      "strict": [2, "global"],
      "vars-on-top": 2,
  }
};