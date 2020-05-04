const express = require('express');
const helmet = require('helmet');

const db = require('../data/db-config')

const server = express();
server.use(helmet());
server.use(express.json());

//retrieve list of all resources
server.get('/api/resources', (req,res) => {
    db('resource')
    .then(name => {
        res.status(200).json(name)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//adding resources
server.post('/api/resources', (req, res) => {
    db('resource').insert(req.body)
    .then(ids => {
        const id = ids[0];

        db('resource').where({id}).first()
        .then(resourceName => {
            res.status(201).json(resourceName);
        })
    }).catch(err => {
        res.status(500).json(err)
    })
})

//listing projects
server.get('/api/projects', (req,res) => {
    db('project as p')
    .then(projectName => {
        res.status(200).json(projectName)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//adding projects
server.post('/api/projects', (req, res) => {
    db('project').insert(req.body)
    .then(ids => {
        const id = ids[0];
        db('project').where({id}).first()
        .then(projectName => {
            res.status(200).json(projectName)
        })
    }).catch(err => {
        res.status(500).json(err)
    })
})

//listing tasks
server.get('/api/tasks', (req,res) => {
    db('task')
    .then(taskName => {
        res.status(200).json(taskName)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//adding task
server.post('/api/tasks', (req, res) => {
    db('task').insert(req.body)
    .then(ids => {
        const id = ids[0];
        db('task').where({id}).first()
        .then(taskName => {
            res.status(200).json(taskName)
        })
    }).catch(err => {
        res.status(500).json(err)
    })
})


module.exports = server;