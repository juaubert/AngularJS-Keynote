'use strict';

angular.module('employeeService', ['ngResource'])
    .service('employeeService', function ($resource) {
        return $resource('/data/employees.json', {}, {
            getEmployees: {method: 'GET', isArray: true}
        });
    });