'use strict';
angular.module('FireLanding.factories', [])
.factory("Leads", function($firebaseArray) {
  // Register the lead
  var register = function($scope, object, callback) {
    object.created_at = firebase.database.ServerValue.TIMESTAMP;
    return firebase.database().ref().child('leads').push(object, callback);
  };

  return {
    register: register
  };
});
