/* global malarkey:false, moment:false, indexConfig:false _:false */
(function () {
  'use strict';

  angular
    .module('app')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('APP_CONFIG', indexConfig)
    .constant('_', _);

})();
