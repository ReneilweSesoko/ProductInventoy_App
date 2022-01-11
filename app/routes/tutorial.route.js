module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //create new tutorial
    router.post("/", tutorials.create);

    //retrive all tutorials
    router.get("/", tutorials.findAll);

    //retrieve all published tutorials
    router.get("/published", tutorials.findAllPublished);

    //retrive a single tutorials with id
    router.get("/:id", tutorials.findOne);

    //update a tutorial with id
    router.put("/:id", tutorials.update);

    //delete a tutorial with id
    router.delete("/:id", tutorials.delete);

    //delete all tutorial
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};