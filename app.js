/**
 * Created by Ayush on 12-10-2016.
 */
var app = angular.module("labs",['ngRoute']);


app.config(function($routeProvider){

    $routeProvider
        .when("/",
            {
                "templateUrl":"partials/home.html",
                "controller":"homeCtrl"
            })


        .otherwise("/")

});










app.controller("homeCtrl", function ($scope) {


    $scope.name = "Urvashi"
})