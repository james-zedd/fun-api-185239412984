const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// @route  GET /api/classes
router.get('/', async (req, res, next) => {
    const classes = await Class.find();

    res.status(200).send({
        status: 200,
        data: classes
    })
});

// @route  GET /api/classes/:id
router.get('/:id', async (req, res, next) => {
    const singleClass = await Class.findById(req.params.id);

    res.status(200).send({
        status: 200,
        data: singleClass
    });
});

// @route  POST /api/classes
router.post('/', async (req, res, next) => {
    let {name, times, instructor} = req.body;

    const doc = new Class({
        name: name,
        times: times,
        instructor: instructor
    });

    await doc.save();

    res.status(201).send({
        status: 201,
        data: doc
    })
});

// @route  PUT /api/classes/:id
router.put('/:id', async (req, res, next) => {
    let {name, times, instructor} = req.body;
    let id = req.params.id;

    const doc = await Class.findById(id);

    name ? doc.name = name : '';
    times ? doc.times = times : '';
    instructor ? doc.instructor = instructor: '';

    await doc.save();

    res.status(201).send({
        status: 201,
        data: doc
    })
});

// @route  DELETE /api/classes/:id
router.delete('/:id', async (req, res, next) => {
    const doc = await Class.findById(req.params.id);

    doc.delete();

    res.status(200).send({
        status: 200,
        data: `Document with id ${req.params.id} has been deleted.`
    })
});

module.exports = router;