"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location) {
  $scope.title = "Add a new Task",
  $scope.btnText = "Save New Task";
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: ""
  };

  $scope.addNewItem = function() {
    console.log("Added new item", $scope.newTask);
    ItemStorage.postNewItem()
    .then(function(response) {
      $location.url("/items/list");
    });
  };
});
