'use strict';
angular.module('FireLanding.controllers', [])
  .controller('LandingCtrl', function($scope, $sce) {
    $scope.content = content;
    $scope.visual_identity = visual_identity;

    $scope.escapeHTML = function(text) {
      return $sce.trustAsHtml(text);
    };

    $scope.escapeVideo = function(video) {
      return $sce.trustAsResourceUrl(video);
    };
  })

  .controller('RegisterCtrl', function($scope, $firebaseArray, Leads) {
    $scope.content = content;
    $scope.visual_identity = visual_identity;

    $scope.registerLead = function() {
      // Firebase reference
      $scope.registerLeadResp = Leads.register($scope, $scope.lead);
      $scope.registerLeadResp.then(function(resp) {
        console.log(resp);
      });
    }
  });
