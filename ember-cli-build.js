'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'node_modules/@appuniversum/appuniversum'
      ]
    },
    // SVG ICONS
    svgstore: {
      excludeSourceFiles: true, // exclude all processed source files
      files: {
        sourceDirs: ['addon/icons'],
        outputFile: '/assets/appuniversum-symbolset.svg',
        excludeSourceFiles: true // exclude source files only for this master SVG
      },
      svgstoreOpts: {
        cleanDefs: true,
        cleanSymbols: true
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
