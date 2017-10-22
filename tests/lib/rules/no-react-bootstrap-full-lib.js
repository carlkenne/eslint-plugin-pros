'use strict';

var rule = require('../../../lib/rules/no-react-bootstrap-full-lib'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});

var ruleTester = new RuleTester();
ruleTester.run('no-react-bootstrap-full-lib', rule, {
  valid: ["import Button from 'react-bootstrap/lib/button'"],

  invalid: [
    {
      code: "import { Button } from 'react-bootstrap';",
      errors: [
        {
          message:
            "Import separate components to reduce bundle size ('react-bootstrap/lib/component')",
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
