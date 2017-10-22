/**
 * @fileoverview ...
 * @author Carl
 */
'use strict';

module.exports = {
  meta: {
    docs: {
      description:
        'Enforce smallest possible bundle size when importing functions from lodash',
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
      ImportDeclaration: function(node) {
        if (node.source.value === 'lodash') {
          context.report({
            node: node,
            message:
              "Import separate functions to reduce bundle size ('lodash/func')"
          });
        }
      }
    };
  }
};
