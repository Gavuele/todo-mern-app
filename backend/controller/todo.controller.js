const TodoModel = require("../models/todo.model");

module.exports.getToDos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.send(todos);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error fetching todos" });
    }
};

module.exports.saveToDos = async (req, res) => {
    const toDo = req.body.toDo;
    try {
        const data = await TodoModel.create({ toDo });
        console.log('success');
        res.status(201).send(data);
    } catch (err) {
        console.error('error', err);
        res.status(500).send(err);
    }
};

module.exports.updateToDos = async (req, res) => {
    const { _id } = req.params;
    const toDo = req.body.toDo;
    try {
        await TodoModel.findByIdAndUpdate(_id, { toDo });
        res.send("Updated Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, msg: "Something went wrong!" });
    }
};

module.exports.deleteToDos = async (req, res) => {
    const { _id } = req.params;
    try {
        await TodoModel.findByIdAndDelete(_id);
        res.send("Deleted Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, msg: "Something went wrong!" });
    }
};
