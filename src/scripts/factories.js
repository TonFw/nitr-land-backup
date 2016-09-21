'use strict';
angular.module('FireLanding.factories', [])
.factory("Leads", function($firebaseArray) {
  // Register the lead
  var register = function($scope, object) {
    var leadsRef = firebase.database().ref().child('leads');
    var leadsArray = $firebaseArray(leadsRef);
    return leadsArray.$add($scope.lead);
  };

  return {
    register: register
  };
});
