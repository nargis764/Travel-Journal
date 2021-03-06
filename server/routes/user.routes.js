const UserController = require("../controllers/user.controller")
const {authenticate} = require("../config/jwt.config")

module.exports = (app) => {
    app.post("/api/users/register", UserController.register);
    app.post("/api/users/login", UserController.login);
    app.post("/api/users/logout", UserController.logout);
    app.get("/api/users", authenticate, UserController.getLoggedInUser);
    app.get("/api/user/:username", UserController.getAnyUser);
    app.get("/api/allUsers", UserController.getAllUsers);
    app.put("/api/users/:username", authenticate, UserController.updateUser)
}
