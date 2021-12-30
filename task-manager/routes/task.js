const express = require('express')
const router = express.Router()

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controller/task')


router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)


// router.route('/').get(getAllTasks)

// or 
// router.route('/').get(getAllTasks).post(createTask)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router