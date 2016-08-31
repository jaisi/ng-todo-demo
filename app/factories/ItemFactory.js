"use strict";

app.factory("ItemStorage", function(FirebaseURL, $q, $http) {

  let getItemList = function() {
    console.log("getItemList called " );
    let items = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/items.json`)
      .success(function(itemObject) {
        let itemCollection = itemObject;
        Object.keys(itemCollection).forEach(function(key) {
          itemCollection[key].id=key;
          items.push(itemCollection[key]);
        });
        resolve(items);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let postNewItem = function(newItem) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newItem))
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let deleteItem = function(itemId){
    console.log("delete in factory");
    return $q(function(resolve, reject){
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success(function(objectFromFirebase){
        resolve(objectFromFirebase);
      });
    });
  };

  return {getItemList, postNewItem, deleteItem};
});
