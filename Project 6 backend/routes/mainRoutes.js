const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.home);
router.get("/about", controller.about);
router.get("/contact", controller.contact);
router.get("/time", controller.time);
router.post("/echo", controller.echo);

module.exports = router;
