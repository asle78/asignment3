var router = require('express').Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/asignment3');

router.use(bodyParser.json());

var userSchema = mongoose.Schema({
    username: {type: String, required: true},
    passwordHash: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

router.get('/users', (req, res) => {
    User.find()
        .then(user => {
            res.send(user)
        })
});

router.post('/autoriser', (req, res) => {
    const username = req.body.username;
    const password= req.body.password;

    User.findOne({username: username})
        .then(user => {
            if (!bcrypt.compareSync(password, user.passwordHash)){
                res.status(401).send('wrong password')
            } else {
                res.send(user)
            }
        })
});

router.post('/insert', (req) => {
    var insertUser = {
        username: req.body.username,
        passwordHash: bcrypt.hashSync(req.body.password, 10)
    };
    var user = new User(insertUser);
    user.save();
});

var messageSchema = mongoose.Schema({
    message: String
});

var Message = mongoose.model('Message', messageSchema);

router.get('/messages', (req, res) => {
    Message.find()
        .then(message => {
            res.send(message)
        })
});

router.post('/new-message', (req) => {
    var insertMessage = {
        message: req.body.message
    };
    var message = new Message(insertMessage);
    message.save();
});

router.delete('/delete-message', (req, res) => {
    console.log(req.body.message);
    Message.findOne({message: req.body.message})
        .then(message => {
            res.send(message.remove().exec())
        })
});

module.exports = router;