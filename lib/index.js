/**
 * @fileoverview ...
 * @author Carl
 */
'use strict';

module.exports = {
  rules: {
    'no-react-bootstrap-full-lib': require('./rules/no-react-bootstrap-full-lib'),
    'no-lodash-full-lib': require('./rules/no-lodash-full-lib'),
    'no-classNames': require('./rules/no-classNames')
  },
  configs: {
    recommended: {
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'pros/no-react-bootstrap-full-lib': 2,
        'pros/no-lodash-full-lib': 2,
        'pros/no-classNames': 2
      }
    }
  }
};
