'use strict';

var app = angular.module('angularApp', ['ngResource']);


app.service('employeeService', function ($resource) {
    return $resource('/data/employees.json', {}, {
        getEmployees: {method: 'GET', isArray: true}
    });
});


app.controller('MainCtrl', ['$scope', 'employeeService', function ($scope, employeeService) {
    
    employeeService.getEmployees(function (data) {
        $scope.employees = data;
    });
    
    $scope.addEmployee = function() {
        $scope.employees.push({
            "name":$scope.form.name,
            "skills":$scope.form.skills,
            "salary":$scope.form.salary
        });
    };
    
}]);

app.directive('employeeTable', function () {
    return {
        restrict: 'E',
        templateUrl: 'template.html'
    };
});

