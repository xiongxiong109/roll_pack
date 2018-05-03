'use strict';

function main2 () {
  return Promise.resolve(require('./main.js')).then(({ default: main }) => {
    main();
  });
}

module.exports = main2;
