'use strict';
angular.module('FireLanding.factories', [])
.factory("Leads", function($firebaseArray) {
  // Register the lead
  var register = function($scope, object) {
    return firebase.database().ref().push(object);
  };

  return {
    register: register
  };
});
