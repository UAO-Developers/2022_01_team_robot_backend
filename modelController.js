// import Todo Model
const User = require("./todoModel");
const Match = require("./matchModel")

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
};

// createNewTodo function - To create new todo
exports.createNewUser = (req, res) => {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            if (user != null) {
                res.status(409).send()
            } else {
                let newUser = new User(req.body);
                console.log(req.body)
                newUser.save((err, user) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(201).json(user);
                });
            }
        }
    })
};

// updateTodo function - To update todo status by id
exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
};

// deleteTodo function - To delete todo by id
exports.deleteUser = async (req, res) => {
    User.findByIdAndDelete(req.params.id).then(user => {
        if (!user) {
            res.status(404).send()
        } else {
            res.send(user).json({ message: "Todo successfully deleted" });
        }
    }
    ).catch(error => {
        res.status(500).send(error)
    })
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            if (user != null) {
                if (req.body.pwd == user.pwd) {
                    res.status(200).send()
                } else {
                    res.status(401).send()
                }
            } else {
                res.status(401).send()
            }
        }
    })
};

exports.createNewMatch = (req, res) => {
    Match.findOne({ local: req.body.local, visit: req.body.visit, is_finished: false}, function (err, match) {
        if (err) {
            res.status(500).send(err);
        } else {
            if (match != null) {
                res.status(409).send()
            } else {
                let newMatch = new Match(req.body);
                newMatch.save((err, match) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(201).json(match);
                });
            }
        }
    })
};

exports.listAllMatcher = (req, res) => {
    Match.find({}, (err, match) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(match);
    });
};