const db = require("../models")

const Tutorial = db.tutorials;

//create and save a new Tutorial
exports.create = (req, res) => {}

//retrieve all tutorials from the DB
exports.findAll = (req, res) => {}

//find a single tutorial using an id
exports.findOne = (req, res) => {}

//update tutorial using an id in the request
exports.update = (req, res) => {}

//delete a single tutorial with the specified id
exports.delete = (req, res) => {}

//delete all tutorials
exports.deleteAll = (req, res) => {}

//find all published tutorials
exports.findAllPublished = (req, res) => {}