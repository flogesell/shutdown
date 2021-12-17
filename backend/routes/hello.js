const express = require("express");
const hello = express.Router();

hello.use(express.json());

// LOGIN
hello.get('/hello', async function (req, res) {
})

module.exports = hello;