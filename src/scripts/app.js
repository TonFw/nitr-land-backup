'use strict';

/**
 * @ngdoc overview
 * @name FireLanding
 * @description
 * # FireLanding
 *
 * Main module of the application.
 */
angular.module('FireLanding', ['ui.router', 'FireLanding.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'views/landing.html',
      controller: 'LandingCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  });
