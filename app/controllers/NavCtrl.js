"use strict";

app.controller("NavCtrl", function($scope, $location, SearchTermData, AuthFactory) {
  $scope.searchText = SearchTermData;
  // $scope.parentIsLoggedIn = $scope.isLoggedIn;
  // console.log("inherited logged in?", $scope.parentIsLoggedIn );
  // $scope.navItems = [
  //   {
  //     name: "Logout",
  //     url: '#/logout'
  //   }, 
  //   {
  //     name: "All Items",
  //     url: '#/items/list'
  //   }, 
  //   {
  //     name: "New Item",
  //     url: '#/items/new'
  //   }
  // ];
});
