"use strict";

var app = angular.module("TodoApp", ["ngRoute"]) // remember to delete the semi-colon
.constant('FirebaseURL', "https://ng-todo-demo-4c81b.firebaseio.com/");

app.config(($routeProvider) => {
  $routeProvider.
    when('/items/list',{
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl'
    }).
    when('/items/new', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemNewCtrl'
    }).
    when('/items/:itemId',  {
      templateUrl: 'partials/item-details.html ',
      controller: 'ItemViewCtrl'
    }).
    otherwise('/items/list');
});

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  console.log("creds", creds);
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);

  // todoRef.onAuth(authData => {
  //   if(!authData){
  //     $location.path("/login");
  //   }
  // });
});
