const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/users');
const News = require('../models/news');
const jwt = require('jsonwebtoken');
const router = express.Router();

mongoose.connect('mongodb://viktor:viktor475@ds161620.mlab.com:61620/magicforest', err => {
    err ? console.log(err) : console.log('Connected to DB');
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) res.status(401).send('Unauthodized Request');
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null') res.status(401).send('Unauthodized Request');
    let payload = jwt.verify(token, 'secretViktor')
    if(!payload) res.status(401).send('Unauthorized Request');

    req.userId = payload.subject;
    next();
}


router.get('/getnews', (req, res) => {
    News.find({}).exec((err, data) => {
        err ? console.log(err) : res.json(data);
    });
});

router.post('/postnews', verifyToken, (req, res) => {
    const data = req.body;
    const saveData = new News(data);
    saveData.save((err, savedNews) => {
        err ? console.log(err) : res.json(savedNews);
    });
});

router.put('/updatenews/:id', verifyToken, (req, res) => {
    const data = req.body;
    News.findByIdAndUpdate(req.params.id, {$set: {text: data.text}},
    {new: true}, (err, updatedText) => {
        err ? console.log(err) : res.json(updatedText);
    });
});

router.post('/login', (req, res) => {
    const data = req.body;
    User.findOne({username: data.username}, (err, user) => {
        if (err) console.log(err);
        if (!data.username && !data.password) res.status(401).send('אנא מלא פרטים')
        else if (!user) res.status(401).send('!שם משתמש שגוי')
        else if (data.password !== user.password) res.status(401).send('!סיסמה שגויה')
        else {
            let payload = {subject: user._id};
            let token = jwt.sign(payload, 'secretViktor');
            res.status(200).send({token});
        }
    });
})

router.delete('/delete/:id', verifyToken, (req, res) => {
    News.findByIdAndRemove(req.params.id, (err, deletedData) => {
        err ? console.log(err) : res.json(deletedData);
    });
});







module.exports = router;

