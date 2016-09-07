"use strict";

app.factory("AuthFactory", function($q) {
  let currentUser = null;
  
  let createUser = function(userObj) {
    console.log("new user", userObj.email, userObj.password );
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };

  let logoutUser = function() {
    return firebase.auth().signOut();
  };

  let isAuthenticated = function() {
    return (firebase.auth().currentUser) ? true : false;
  };

  return {createUser, loginUser, logoutUser, isAuthenticated};

});
