
const {saveFrequentLinkVisited} = require("../controller/frequentController");

const express = require("express");
const router = express.Router();

router.route("/saveFrequentVisited").post(saveFrequentLinkVisited);

module.exports = router;