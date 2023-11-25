var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/courses', {
            templateUrl: 'course.html'
        })
        .when('/community', {
            templateUrl: 'community.html'
        })
        .when('/contact', {
            templateUrl: 'contact.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
