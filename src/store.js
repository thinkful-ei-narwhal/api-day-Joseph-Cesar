
const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(itemName) {
  //might need to delete bottom line later
  //  item.validateName(itemName);
  this.items.push(itemName);
}

function findAndUpdate(id,newData){
  //console.log(name.id)
  const foundData =this.items.find(name=> name.id===id);
  Object.assign(foundData,newData);
}

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate
};
