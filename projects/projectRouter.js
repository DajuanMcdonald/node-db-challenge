const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('project')
    .then(projects => {
        res.json(projects)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    db('project')
})

module.exports = router;
