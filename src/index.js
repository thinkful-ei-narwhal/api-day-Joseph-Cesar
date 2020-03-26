import $ from "jquery";
import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";
import api from './api';

import "./index.css";

const main = function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
    .then(res => console.log(res));
};

$(main);