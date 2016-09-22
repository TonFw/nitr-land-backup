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

  .controller('ThanksPageCtrlCtrl', function($scope) {

  })

  .controller('RegisterCtrl', function($scope, $state, Leads) {
    // Perform events after Lead register action (check if it was successfully registered
    var afterRegisterLead = function(error) {
      if(error) {
        console.log(error);
        alert('Ocorreu um erro, verifique todos campos e envie novamente.');
        $scope.sendingData = false;
      }else {
        $state.go('thanks');
      }
    };

    $scope.registerLead = function() {
      // Prevent more than one submission click
      $scope.sendingData = true;

      // Firebase reference
      $scope.registerLeadResp = Leads.register($scope, $scope.lead, afterRegisterLead);
    }
  });
