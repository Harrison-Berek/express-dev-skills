var express = require('express');
var router = express.Router();
// Require the controller for the todos resource
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/todos"

/* GET /todos     --- "index" action/functionality */
router.get('/', skillsCtrl.index);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);


module.exports = router;