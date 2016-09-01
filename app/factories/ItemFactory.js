"use strict";

app.factory("ItemStorage", (FirebaseURL, $q, $http) => {

  let getItemList = () => {
    console.log("getItemList called with ES6");
    let items = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/items.json`)
      .success((itemObject) => {
        let itemCollection = itemObject;
        Object.keys(itemCollection).forEach((key) => {
          itemCollection[key].id=key;
          items.push(itemCollection[key]);
        });
        resolve(items);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newItem))
      .success((ObjFromFirebase) => {
        resolve(ObjFromFirebase);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    console.log("delete in factory");
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((objectFromFirebase) => {
        resolve(objectFromFirebase);
      });
    });
  };

  return {getItemList, postNewItem, deleteItem};
});
