'use strict';

var rule = require('../../../lib/rules/no-classNames'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
});

var ruleTester = new RuleTester();
ruleTester.run('no-classNames', rule, {
  valid: [
    '<Component />',
    '<Component isExpanded />',
    "<Component attribute='values' />",
    '<Component attribute={true} ></Component>'
  ],

  invalid: [
    {
      code:
        "<Wrapper><Component classNames={'myCssClass'} ></Component></Wrapper>",
      errors: [
        {
          message: 'Do not use classNames, use styled-components',
          type: 'JSXAttribute'
        }
      ]
    }
  ]
});
