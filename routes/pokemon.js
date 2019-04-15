var express = require('express');
var router = express.Router();
var pokeController = require('../src/controllers/controllerPoke');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.route('/pokemon')
    .get(pokeController.index)
    .post(pokeController.new);

router.route('/pokemon/:pokemon_id')
    .put(pokeController.update)
    .delete(pokeController.delete);

module.exports = router;
