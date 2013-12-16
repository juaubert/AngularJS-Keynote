'use strict';

var app = angular.module('angularApp', ['employeeService']);

/* Controller */
app.controller('MainCtrl', function ($scope, employeeService) {
    
    employeeService.getEmployees(function (data) {
        $scope.employees = data;
    });

    $scope.addEmployee = function () {
        $scope.employees.push({
            name: $scope.form.name,
            skills: $scope.form.skills,
            salary: $scope.form.salary
        });
    };
});



/* Directive */
app.directive('employeeTable', function () {
    return {
        restrict: 'E',
        templateUrl: 'template.html'
    };
});



/* Service */
angular.module('employeeService', ['ngResource'])
    .service('employeeService', function ($resource) {
        return $resource('/data/employees.json', {}, {
            getEmployees: {method: 'GET', isArray: true}
        });
    });