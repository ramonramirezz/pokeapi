const ActorModel = require('../models/modelActor');
// Handle index actions
exports.index = (req, res) => {
    ActorModel.get((err, actores) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "actores retrieved successfully",
            data: actores
        });
    });
};
// Handle create actor actions
exports.new = (req, res) => {
    var actorModel = new ActorModel();
    actorModel.name = req.body.name;
    actorModel.lastname = req.body.lastname;
    actorModel.sex = req.body.sex;
    actorModel.nationality = req.body.nationality;
    actorModel.bio = req.body.bio;
    actorModel.image = req.body.image;

    // save the contact and check for errors
    actorModel.save(function (err) {
            // if (err)
            //     res.json(err);
    res.json({
                message: 'New actor created!',
                data: actorModel
            });
        });
};
// Handle view contact info
exports.view = (req, res) => {
    ActorModel.findById(req.params.actor_id, (err, actor) => {
        if (err)
            res.send(err);
        res.json({
            message: 'actor details loading..',
            data: actor
        });
    });
};
// Handle update contact info
exports.update = (req, res) => {

    ActorModel.findById(req.params.actor_id, function (err, actorModel) {
        if (err)
            res.send(err);
            actorModel.name = req.body.name;
            actorModel.lastname = req.body.lastname;
            actorModel.sex = req.body.sex;
            actorModel.nationality = req.body.nationality;
            actorModel.bio = req.body.bio;
            actorModel.image = req.body.image;

        actorModel.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'actor Info updated',
                data: actorModel
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    ActorModel.remove({
        _id: req.params.actor_id
    }, function (err, actor) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'actor deleted'
        });
    });
};


