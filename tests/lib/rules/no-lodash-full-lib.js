'use strict';

var rule = require('../../../lib/rules/no-lodash-full-lib'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});

var ruleTester = new RuleTester();
ruleTester.run('no-lodash-full-lib', rule, {
  valid: ["import { filter } from 'lodash/fp'"],

  invalid: [
    {
      code: "import _ from 'lodash';",
      errors: [
        {
          message:
            "Import separate functions to reduce bundle size ('lodash/func')",
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
