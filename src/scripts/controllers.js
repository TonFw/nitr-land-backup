'use strict';
angular.module('FireLanding.controllers', [])
  .controller('LandingCtrl', function($scope, $sce) {
    $scope.content = content;
    $scope.visual_identity = visual_identity;

    if(localStorage.registered == true) {
      $state.go('thanks');
    }

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
    // if the lead is already registered so go to thanks page
    if(localStorage.registered == "true") {
      $state.go('thanks');
    }

    // Perform events after Lead register action (check if it was successfully registered
    var afterRegisterLead = function(error) {
      if(error) {
        console.log(error);
        alert('Ocorreu um erro, verifique todos campos e envie novamente.');
        $scope.sendingData = false;
      }else {
        // register it lead on localStorage
        localStorage.registered = true;

        // create it localStorage lead attrs
        $scope.lead.id = $scope.registerLeadResp.path.o[1];
        localStorage.lead = JSON.stringify($scope.lead);

        // go to thanks page
        $state.go('thanks');
      }
    };

    // register lead action
    $scope.registerLead = function() {
      // check if the lead is filled, abort if not
      if($scope.lead == undefined || $scope.lead == null) $scope.lead = {name: null, email: null};
      for(var attr in $scope.lead) {
        var currentAttrValue = $scope.lead[attr];
        if(currentAttrValue == undefined || currentAttrValue == null || currentAttrValue.length == 0) {
          // Abort alert & abort it
          alert('Ocorreu um erro, verifique todos campos e envie novamente.');
          return;
        }
      }

      // Prevent more than one submission click
      $scope.sendingData = true;

      // Firebase reference
      $scope.registerLeadResp = Leads.register($scope, $scope.lead, afterRegisterLead);
    }
  });
