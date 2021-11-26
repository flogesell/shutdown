const express = require("express");
const auth = express.Router();

const jwt = require('jsonwebtoken');
const authentificate = require('../middleware/authentification');

const { SECRET } = process.env;

auth.use(express.json());

// LOGIN
auth.post('/login', async function (req, res) {
})

// REGISTER
auth.post('/register', async function (req, res) {
})


// EDIT USER
auth.post('/edit/:id', authentificate, async function (req, res) {
})

module.exports = auth;