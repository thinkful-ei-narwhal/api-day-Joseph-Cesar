const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joseph';

function getItems() {
  return fetch(`${BASE_URL}/items`)
};

function createItem(name) {
  const newItem = {
    name,
  }
  let secondArg = {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newItem) 
  }

  return fetch(`${BASE_URL}/items`, secondArg);
};

export default {
  getItems,
  createItem
};