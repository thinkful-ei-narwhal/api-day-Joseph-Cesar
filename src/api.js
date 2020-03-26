const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joseph';

function getItems() {
  return fetch(`${BASE_URL}/items`)
};

function createItem(name) {
  const newItem = JSON.stringify({ name });

  let secondArg = {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: newItem
  }

  return fetch(`${BASE_URL}/items`, secondArg);
};

function updateItem(id, updateData) {
  const newData = JSON.stringify(updateData);

  let secondArg = {
    method: 'PATCH', 
    headers: {'Content-Type': 'application/json'},
    body: newData
  }

  return fetch(`${BASE_URL}/items/${id}`, secondArg);
}

function deleteItem(id) {
  let secondArg = {
    method: 'DELETE', 
    headers: {'Content-Type': 'application/json'},
  }

  return fetch(`${BASE_URL}/items/${id}`, secondArg);
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};