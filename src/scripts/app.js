'use strict';

/**
 * @ngdoc overview
 * @name FireLanding
 * @description
 * # FireLanding
 *
 * Main module of the application.
 */
angular.module('FireLanding', ['ui.router', 'ui.mask', 'firebase', 'FireLanding.controllers', 'FireLanding.factories'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'views/landing.html',
      controller: 'LandingCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  });
