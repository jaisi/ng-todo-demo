"use strict";

var app = angular.module("TodoApp", ["ngRoute"]) // remember to delete the semi-colon
.constant('FirebaseURL', "https://ng-todo-demo-4c81b.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  console.log("isAuth Called" );
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

// resolve - An optional map of dependencies which should be injected into the controller. 
// If any of these dependencies are promises, the router will wait for them all to be resolved 
// or one to be rejected before the controller is instantiated. 
app.config(($routeProvider) => {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/login.html',
    controller: "LoginCtrl"
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: "LoginCtrl"
  }).
  when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl',
    resolve: {isAuth}
  }).
  when('/items/new', {
    templateUrl: 'partials/item-form.html',
    controller: 'ItemNewCtrl',
    resolve: {isAuth}
  }).
  when('/items/view/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl',
    resolve: {isAuth}
  }).  
  when('/items/view/:itemId/edit', {
    templateUrl: 'partials/item-form.html',
    controller: 'ItemEditCtrl',
    resolve: {isAuth}
  }).
  otherwise('/');
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
