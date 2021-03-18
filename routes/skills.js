var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
// Require the controller for the todos resource
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/todos"

/* GET /skills     --- "index" action/functionality */
router.get('/', skillsCtrl.index);
// GET/skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// Edit /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
//Update /skills/:id
router.put('/:id', skillsCtrl.update); 


module.exports = router;