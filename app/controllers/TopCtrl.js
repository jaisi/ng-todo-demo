"use strict";

app.controller("TopCtrl", function($scope, $location, $window, AuthFactory) {
  let currentUser = null;
  $scope.isLoggedIn = false;
  $scope.test = "This is a test";

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      currentUser = user.uid;
      $scope.isLoggedIn = true;
      console.log("currentUser logged in?", currentUser);
      console.log("logged in t-f", $scope.isLoggedIn );
      $scope.$apply();
    } else {
      currentUser = null;
      $scope.isLoggedIn = false;
      console.log("currentUser logged out?", currentUser);
      $window.location.href = "#/login";
    }
  });

  $scope.getUser = function() {
    return currentUser;
  };

  $scope.logout = function() {
    AuthFactory.logoutUser()
    .then(function(data) {
      console.log("logged out?", data );
      console.log("User signed out", $scope.getUser());
    }, function(error) {
      // An error happened.
    });
  };

});
