/**
 * @fileoverview ...
 * @author Carl
 */
'use strict';

module.exports = {
  meta: {
    docs: {
      description:
        'Enforce smallest possible bundle size when importing components from react-bootstrap',
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
        if (node.source.value === 'react-bootstrap') {
          context.report({
            node: node,
            message:
              "Import separate components to reduce bundle size ('react-bootstrap/lib/component')"
          });
        }
      }
    };
  }
};
