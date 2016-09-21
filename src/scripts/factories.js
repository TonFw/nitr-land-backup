'use strict';
angular.module('FireLanding.factories', [])
.factory("Leads", function($firebaseArray) {
  // Return the leads list
  var all = function() {
    return $firebaseArray(firebase.database().ref().child('leads'));
  };

  // Register the lead
  var register = function($scope, object) {
    $scope.leads.$add(object);
  };

  return {
    all: all,
    register: register
  };
});
