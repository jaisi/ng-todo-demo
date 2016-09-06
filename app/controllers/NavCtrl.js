"use strict";

app.controller("NavCtrl", function($scope, $location, AuthFactory) {
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

  $scope.account = {
    email: "",
    password: ""
  };

  if($location.path() === "/logout"){
    AuthFactory.logoutUser()
    .then(function() {
      console.log("User signed out", AuthFactory.getUser());
    }, function(error) {
      // An error happened.
    });
    $scope.isActive = false;
  }

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    }, (error, userData) => {
      if(error){
        console.log(`Error creating user: ${error}`);
      } else{
        console.log(`Created user account with uid: ${userData.uid}`);
        $scope.login();
      }
    });
  };

  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory
      .loginUser($scope.account)
      .then(() => {
        $scope.isActive = true;
        $location.path("/");
        // $scope.$apply();
      });
  };
});
