"use strict";

app.factory("AuthFactory", function() {
  let currentUser = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      currentUser = user.uid;
    } else {
      currentUser = null;
    }
  });

  let createUser = function(userObj) {
    firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };

  let getUser = function() {
    return currentUser;
  };

  let loginUser = function(userObj) {
    firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };

  let logoutUser = function() {
    firebase.auth().signOut();
  };

  return {createUser, getUser, loginUser, logoutUser};

});
