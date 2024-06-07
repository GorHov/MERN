const Router = require("express");
const controller = require("./authController");
const { check } = require("express-validator");
const authMiddleware = require("./middlewares/authMiddleware");
const roleMiddleware = require("./middlewares/roleMiddleware");

const router = new Router();

router.post(
  "/registration",
  [
    check("username", "username can not be empty").notEmpty(),
    check("password", "password must have min 4 symbols").isLength({ min: 4 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users",roleMiddleware(['ADMIN']), controller.getUsers);

module.exports = router;
