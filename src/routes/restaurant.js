const express = require('express');
const route = express.Router();
const {createRestaurant, getRestaurants, getRestaurantById, updateRestaurant}= require('../controllers/restaurant');

route.post('/', createRestaurant);
route.get('/', getRestaurants);
route.get('/:id', getRestaurantById);
route.put('/:id', updateRestaurant);

module.exports = route;