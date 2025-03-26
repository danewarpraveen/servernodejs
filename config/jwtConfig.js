const crypto = require("crypto");

const secreatekey = crypto.randomBytes(32).toString("hex");

module.exports = {
    secreatekey :secreatekey
}