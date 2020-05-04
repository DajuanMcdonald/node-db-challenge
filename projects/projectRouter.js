const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('project')
    .then(projects => {
        res.json(projects)
    })
})

