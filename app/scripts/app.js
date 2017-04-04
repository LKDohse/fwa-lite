'use strict';

/**
 * @ngdoc overview
 * @name wwwrootApp
 * @description
 * # wwwrootApp
 *
 * Main module of the application.
 */
angular
  .module('fwAerial', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/about', {
            templateUrl: 'app/views/about.html',
            controller: 'AboutController',
            controllerAs: 'about'
        })
        .when('/classes', {
            templateUrl: 'app/views/classes.html',
            controller: 'ClassesController',
            controllerAs: 'vm'
        })
        .when('/faqs', {
            templateUrl: 'app/views/faqs.html',
            controller: 'FAQController',
            controllerAs: 'faqs'
        })
        .when('/parties', {
            templateUrl: 'app/views/parties.html',
            controller: 'PartiesController',
            controllerAs: 'parties'
        })
        .when('/schedule', {
            templateUrl: 'app/views/schedule.html',
            controller: 'ScheduleController',
            controllerAs: 'schedule'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
