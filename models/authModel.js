const mongoose = require("mongoose");

const userSchema = {
    username: String,
    password: String
};

const LoginData = mongoose.model("LoginData", userSchema);

module.exports = LoginData;