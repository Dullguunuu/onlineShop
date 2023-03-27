const jwt = require("jsonwebtoken")

const getToken = (userOrAdmin) => {
    const token = jwt.sign({ userOrAdmin }, process.env.TOKEN_SECRET_KEY, { expiresIn: "24h" })
    return token;
}

module.exports = getToken;