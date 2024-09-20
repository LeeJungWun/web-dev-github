const express = require("express");

const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (req, res) {
  let order = req.query.order;
  let nextOrder = 'desc';
  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === 'desc') {
    nextOrder = 'asc';
  }
  const storeRestaurants = resData.getStoreRestaurants();
  storeRestaurants.sort(function (resA, resB) {
    if (
      (order === "asc" && resA.name > resB.name) ||
      (order === "desc" && resB.name > resA.name)
    ) {
      return 1;
    }
    return -1;
  });
  res.render("restaurants", {
    numberOfRestaurants: storeRestaurants.length,
    restaurants: storeRestaurants,
    nextOrder: nextOrder,
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const storeRestaurants = resData.getStoreRestaurants();

  for (const restaurant of storeRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }

  res.render("404");
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const restaurants = resData.getStoreRestaurants();

  restaurants.push(restaurant);
  resData.storeRestaurants(restaurants);

  res.redirect("confirm");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

module.exports = router;
