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

  $scope.isItEnv = function (type) {
    var envLocal = (location.hostname === "localhost" || location.hostname === "127.0.0.1");

    if(type == 'production') {
      return !envLocal;
    } else if(type == 'test' || type == 'development') {
      return envLocal;
    } else {
      return !envLocal;
    }
  };
});
