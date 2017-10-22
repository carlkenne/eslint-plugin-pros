/**
 * @fileoverview ...
 * @author Carl
 */
'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Do not use classNames, use styled-components',
      category: 'performance',
      recommended: true
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    return {
      JSXAttribute: function(node) {
        if (
          node.name.type === 'JSXIdentifier' &&
          node.name.name === 'classNames'
        ) {
          context.report({
            node: node,
            message: 'Do not use classNames, use styled-components'
          });
        }
      }
    };
  }
};
