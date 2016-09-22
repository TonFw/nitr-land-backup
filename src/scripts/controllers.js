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

    // Perform events after Lead register action (check if it was successfully registered
    var afterRegisterLead = function(error) {
      if(error) {
        console.log(error);
        $scope.sendingData = false;
      }else {
        console.log('sucesso');
      }
    };

    $scope.registerLead = function() {
      // Prevent more than one submission click
      $scope.sendingData = true;

      // Firebase reference
      $scope.registerLeadResp = Leads.register($scope, $scope.lead, afterRegisterLead);
    }
  });
