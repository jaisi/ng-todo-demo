"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage) {
  console.log("Hello, Item list ctrl");

  ItemStorage.getItemList()
  .then(function(itemCollection) {
    $scope.items = itemCollection;
  });

  $scope.itemDelete = function(itemId){
    console.log("itemId for delete", itemId);
    ItemStorage.deleteItem(itemId)
    .then(function(response){
      ItemStorage.getItemList().then(function(itemCollection){
        $scope.items = itemCollection;
      });
    });
  };
});
