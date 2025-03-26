const express = require("express");
const cors = require("cors");
const { login } = require("../controller/userController");

const loginRouter = express.Router();

loginRouter.use(cors());

loginRouter.use("/login", login);

export { loginRouter }