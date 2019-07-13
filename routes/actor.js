var express = require('express');
var router = express.Router();
var actorcontroller = require('../src/controllers/controllerActor');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.route('/actor')
    .get(actorcontroller.index)
    .post(actorcontroller.new);

router.route('/actor/:actor_id')
    .put(actorcontroller.update)
    .delete(actorcontroller.delete);

module.exports = router;
