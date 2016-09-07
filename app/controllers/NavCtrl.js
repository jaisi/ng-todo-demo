"use strict";

app.controller("NavCtrl", function($scope, $location, SearchTermData, AuthFactory) {
  $scope.searchText = SearchTermData;
  $scope.navItems = [
    {
      name: "Logout",
      url: '#/logout',
      showState: "$parent.isLoggedIn"
    },
    {
      name: "All Items",
      url: '#/items/list',
      showState: "$parent.isLoggedIn"
    },
    {
      name: "New Item",
      url: '#/items/new',
      showState: "$parent.isLoggedIn"
    },
    {
      name: "Login",
      url: "#/login",
      showState: "!$parent.isLoggedIn"
    }
  ];
});
