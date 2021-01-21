'use strict';

module.exports = {
    'no-foo': {
        meta: {
            docs: {
                description: 'Disallow usage of foo',
                category: 'Possible Errors',
                recommended: false,
            },
            schema: [],
        },
        create: function (context) {
            return {
                Identifier: function (node) {
                    if (node.name === 'p') {
                        context.report({
                            node,
                            message: 'Variable name "p" is not allowed.'
                        })
                    }
                },
            };
        },
    },
};
