"use strict";

app.controller("TodoCtrl", function($scope, $location){

  $scope.newItem = function(){
    console.log("you clicked new Item");
    $location.url("/items/new");
  };
  
  $scope.allItem = function(){
    console.log("you clicked all items");
    $location.url("/items/list");
  };

});
