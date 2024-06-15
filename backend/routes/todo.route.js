const { Router } = require('express');
const { getToDos, saveToDos, updateToDos, deleteToDos } = require('../controller/todo.controller');


const router = new Router();

router.get('/get', getToDos);
router.post('/save', saveToDos);
router.put('/update/:_id', updateToDos);  // Маршрут для обновления задачи
router.delete('/delete/:_id', deleteToDos);  // Маршрут для удаления задачи

module.exports = router;
