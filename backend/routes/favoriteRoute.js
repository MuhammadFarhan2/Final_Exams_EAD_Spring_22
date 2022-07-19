const express = require("express");
path = require('path');
const {addFavorite,deleteFavorite,getFavorites } = require("../controller/favoriteController");

const router = express.Router();

/* Api to add */
router.route("/add-favorite").post(addFavorite);
/* Api to delete */
router.route("/delete-favorite").post(deleteFavorite);
/*Api to get of search api*/
router.route("/get-favorite").get(getFavorites);


module.exports = router;


