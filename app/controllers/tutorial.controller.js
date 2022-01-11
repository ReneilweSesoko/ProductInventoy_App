const res = require("express/lib/response");
const db = require("../models");
const Tutorial = db.tutorials;

//Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ meassage: "Content can not be empty"});
        return;
    }
    //Create a tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    });

    //save tutorial on the database
    tutorial.save(tutorial).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            meassage: err.meassage || "Some error occured while creating the Tutorial"
        });
    });
};

//Retrieve all Tutorial with an id
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title? { title: {$regrex: new RegExp(title), $options: "i"}} : {};
    
    Tutorial.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            meassage: err.meassage || "Some error occured whiel retrieving tutorials"
        });
    });
};

//Find a single tutorial by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findById(id).then(data => {
        if (!data)
            res.status(404).send({message: "Not found tutorial with id " + id });
        else
        res.send(data);    
    }).catch(err => {
        res.status(500).send({message: "Error receiving tutorial with id = " + id });
    });
};

//Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;
    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data)  
            res.status(404).send({
                message: `Cannot update tutorial with id=${id}. MAybe tutorial was not found!`
            });
        else
            res.send({
                message: "Tutorial was updated successfully"
            });
    }).catch(err => {
        res.status(500).send({
            message: "Error updating tutorial with id = " + id
        });
    });
};

//Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.findByIdAndRemove(id).then(data => {
        if (!data)
            res.status(404).send({
                message: `Cannont delete tutorial with id=${id}. Maybe tutorial was not found!`
            });
        else
            res.send({
                message: "Tutorial was deleted successfully!"
            });
    });
};

//Delete all Tutorials from the database
exports.deleteAll = (req, res) => {
        Tutorial.deleteMany({}).then(data => {
            res.send({
                message: `${data.deletedCount} Tutorial were dleted successfully`
            });
        }).catch(err => {
            res.status(500).send({
                message: err.meassage || "Some error occured while removing all tutorials"
            });
        });
};

//Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.find({ published: true }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.meassage || "Some error occured while retrieving tutorials"
        });
    });
};