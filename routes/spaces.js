var express = require('express');
var router = express.Router();
const Space = require('../models/space')

/* GET all spaces. */
router.get('/', async function (req, res, next) {
    const spaces = await Space.forge({}).fetchAll();

    res.json(spaces);
});

/* POST a new space. */
router.post('/', async function (req, res, next) {
    console.log('you called med')
    const insert = await Space.forge({}).save(req.body);
    res.json(insert)
});

module.exports = router;
