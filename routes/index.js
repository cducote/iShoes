var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//New Shoesie
router.get('/new', function(req, res){
	res.render("new.hbs");
});
//redirect
router.post('/', (req, res) => {
  // const newUser = new User(req.body)
  // newUser.save()
  Shoesie.create(req.body)
    .then((shoesie) => {
      res.redirect(`/shoesie/${shoesie._id}`)
    })
})

  

module.exports = router
