'use strict';

const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
  collection: require('./web-admin-test.postman_collection.json'),
  environment: require('./web-admin-dev.postman_environment.json'),
  reporters: 'cli',
}, function(err) {
  if (err) {
    throw err;
  }
  console.log('collection run complete!');
});
