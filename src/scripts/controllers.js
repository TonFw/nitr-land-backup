'use strict';
angular.module('FireLanding.controllers', [])
  .controller('LandingCtrl', function($scope, $state, $sce) {
    $scope.content = content;
    $scope.visual_identity = visual_identity;

    $scope.escapeHTML = function(text) {
      return $sce.trustAsHtml(text);
    };
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
      // Abort if it leadForm is not valid
      if(!$scope.leadForm.$valid) return;

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
  })


  .controller('ThanksPageCtrl', function($scope) {
    // Aux encoded Variables
    $scope.via = '';
    $scope.text = 'Estou criando meu app agora, comece o seu também e ganhe R$ 500 de desconto';
    $scope.title = '';
    $scope.avatar = '';
    $scope.hashTags = '';
    $scope.encodedURL = 'https://'+ window.location.hostname +'?r='+currentLead().id;

    $scope.shareOn = function (socialMedia) {
      switch(socialMedia) {
        case 'facebook':
          // return `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
          return 'https://www.facebook.com/sharer/sharer.php?u='+$scope.encodedURL;
        break;

        case 'twitter':
          // return `https://twitter.com/intent/tweet?url=${encodedURL}&text=${text}&via=${via}&hashtags=${hashTags}`;
          // return 'https://twitter.com/intent/tweet?url='+encodedURL+'&text='+text+'&via='+via+'&hashtags='+hashTags;
          return 'https://twitter.com/intent/tweet?url='+$scope.encodedURL+'&text='+$scope.text;
        break;

        case 'gplus':
          // return `https://plus.google.com/share?url=${encodedURL}`;
          return 'https://plus.google.com/share?url='+$scope.encodedURL;
        break;

        case 'linkedin':
          // return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${title}&summary=${text}&source=${avatar}`;
          // return 'https://www.linkedin.com/shareArticle?mini=true&url='+encodedURL+'&title='+title+'&summary='+text+'&source='+avatar;
          return 'https://www.linkedin.com/shareArticle?mini=true&url='+$scope.encodedURL+'&summary='+$scope.text;
        break;
      }
    }
  });
