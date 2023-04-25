const mongoose = require("mongoose");

const userSchema = {
    username: String,
    age: String,
    password: String,
    securityquestion: String
}

const UserData = mongoose.model("UserData", userSchema)

module.exports = UserData;