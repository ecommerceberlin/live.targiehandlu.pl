
const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components']);

  module.exports = withTM({
    
    webpack: (config) => {
      config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');  
      return config
    },

    i18n: {
      locales: ['pl'],
      defaultLocale: 'pl',  
    },

    async rewrites() { return [{
      source: '/presenters',
      destination: '/speakers',
    },
    ]},

  
  });