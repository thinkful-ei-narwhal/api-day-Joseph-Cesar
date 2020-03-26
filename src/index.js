import $ from "jquery";
import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";
import api from './api';

import "./index.css";

const main = function() {
  api.createItem('pears')
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });

  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then(res => res.json())
    .then(res => console.log(res));
};

$(main);