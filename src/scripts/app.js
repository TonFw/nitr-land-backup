'use strict';

/**
 * @ngdoc overview
 * @name FireLanding
 * @description
 * # FireLanding
 *
 * Main module of the application.
 */
angular.module('FireLanding', ['ui.router', 'ngMask', 'firebase', 'FireLanding.controllers', 'FireLanding.factories'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('landing', {
      url: '/startup',
      templateUrl: 'views/landing.html',
      controller: 'LandingCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl'
    })
    .state('thanks', {
      url: '/thanks_page',
      templateUrl: 'views/thanks_page.html',
      controller: 'ThanksPageCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/startup');
  })

  .config(function($provide) {
    $provide.decorator('$firebaseArray', function($delegate, $window) {
      var add = $delegate.prototype.$add;

      $delegate.prototype.$add = function(newData) {
        newData.created_at = $window.Firebase.ServerValue.TIMESTAMP;

        return add.call(this, newData);
      };

      return $delegate;
    });
  });
