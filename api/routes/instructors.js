const express = require('express');
const router = express.Router();
const Instructor = require('../models/Instructor');

// @route  GET /api/instructors
router.get('/', async (req, res, next) => {
    const instructors = await Instructor.find();

    res.status(200).send({
        status: 200,
        data: instructors
    });
});

// @route  GET /api/instructors/:id
router.get('/:id', async (req, res, next) => {
    const instructor = await Instructor.findById(req.params.id);

    res.status(200).send({
        status: 200,
        data: instructor
    });
});

// @route  POST /api/instructors
router.post('/', async (req, res, next) => {
    let {
        firstname, 
        lastname, 
        nickname, 
        gender, 
        phonenumber,
        emailwork,
        emailother,
        address1,
        address2,
        city,
        province,
        postal,
        isPT
    } = req.body;

    const instructor = new Instructor({
        name: {
            given: firstname,
            family: lastname,
            nickname: nickname
        },
        gender: gender,
        contact: {
            phone: phonenumber,
            email: {
                work: emailwork,
                personal: emailother
            },
            address: {
                line_1: address1,
                line_2: address2,
                city: city,
                province: province,
                postal_code: postal
            },
        },
        isPT: isPT
    });

    await instructor.save();

    res.status(201).send({
        status: 201,
        data: instructor
    })
});

// @route  PUT /api/instructors/:id
router.put('/:id', async (req, res, next) => {
    let {
        firstname, 
        lastname, 
        nickname, 
        gender, 
        phonenumber,
        emailwork,
        emailother,
        address1,
        address2,
        city,
        province,
        postal,
        isPT
    } = req.body;

    const doc = await Instructor.findById(req.params.id);

    firstname ? doc.name.given = firstname : '';
    lastname ? doc.name.family = lastname : '';
    nickname ? doc.name.nickname = nickname : '';
    gender ? doc.gender = gender : '';
    phonenumber ? doc.contact.phone = phonenumber : '';
    emailwork ? doc.contact.email.work = emailwork : '';
    emailother ? doc.contact.email.personal = emailother : '';
    address1 ? doc.contact.address.line_1 = address1 : '';
    address2 ? doc.contact.address.line_2 = address2 : '';
    city ? doc.contact.address.city = city : '';
    province ? doc.contact.address.province = province : '';
    postal ? doc.contact.address.postal_code = postal : '';
    isPT ? doc.isPT = isPT : '';

    await doc.save();

    res.status(200).send({
        status: 200,
        data: doc
    });
});

// @route  DELETE /api/instructors/:id
router.delete('/:id', async (req, res, next) => {
    const doc = await Instructor.findById(req.params.id);

    doc.delete();

    res.status(200).send({
        status: 200,
        data: `Instructor with id ${req.params.id} has been deleted.`
    })
});

module.exports = router;