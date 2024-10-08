const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurants.json");

function getStoreRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storeRestaurants = JSON.parse(fileData);

  return storeRestaurants;
}

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
  getStoreRestaurants: getStoreRestaurants,
  storeRestaurants: storeRestaurants,
};
