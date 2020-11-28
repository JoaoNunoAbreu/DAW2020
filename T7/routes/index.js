var express = require('express');
var router = express.Router();

var Student = require('../controllers/student')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', function(req, res, next) {
  Student.list()
    .then(data => res.render('students',{list: data}))
    .catch(err => res.render('error',{error: err}))
});

// GET do aluno
router.get(/\/students\/:[A|PG][0-9]+/, function(req, res) {
  var id = req.url.split(":")[1]
  Student.lookup(id)
    .then(stu => res.render('student',{student: stu}))
    .catch(err => res.render('error',{error: err}))
});

// Registar um aluno
router.get('/students/registar', function(req, res){
  res.render('regist',{title: 'Registo de Aluno'})
})

// POST de aluno
router.post('/students', function(req,res) {
  Student.insert(req.body)
  res.redirect('/students')
})

// DELETE de um aluno
router.get(/\/students\/delete\/:[A|PG][0-9]+/, function(req, res) {
  var id = req.url.split(":")[1]
  Student.remove(id)
  res.redirect('/students')
});

// Editar um aluno
router.get(/\/students\/edit\/:[A|PG][0-9]+/, (req, res) => {
  var id = req.url.split(":")[1]
  Student.lookup(id)
    .then(data => res.render('edit',{student: data}))
    .catch(err => res.render('error', {error: err}))
})

// PUT de aluno
router.post('/students/edit', (req,res)=>{
  Student.edit(req)
  res.redirect('/students')
})

module.exports = router;