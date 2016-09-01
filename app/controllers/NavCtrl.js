"use strict";

app.controller("NavCtrl", function($scope, SearchTermData, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
  $scope.searchText = SearchTermData;
  $scope.navItems = [
    {
      name: "Logout",
      url: '#/logout'
    }, 
    {
      name: "All Items",
      url: '#/items/list'
    }, 
    {
      name: "New Item",
      url: '#/items/new'
    }
  ];
});
