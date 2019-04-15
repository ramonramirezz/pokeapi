// contactController.js
// Import contact model
PokeApi = require('../models/modelPoke');
// Handle index actions
exports.index = function (req, res) {
    PokeApi.get(function (err, pokemon) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "pokeapi retrieved successfully",
            data: pokemon
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var pokeApi = new PokeApi();
    pokeApi.name = req.body.name ? req.body.name : pokeApi.name;
    pokeApi.number = req.body.number;
    pokeApi.type = req.body.type;
    pokeApi.ability = req.body.ability;
// save the contact and check for errors
pokeApi.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New pokeapi created!',
            data: pokeApi
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    PokeApi.findById(req.params.pokeapi_id, function (err, pokeapi) {
        if (err)
            res.send(err);
        res.json({
            message: 'pokeapi details loading..',
            data: pokeapi
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {

    console.log(res.body);
PokeApi.findById(req.params.pokemon_id, function (err, pokeapi) {
        if (err)
            res.send(err);
        pokeapi.name = req.body.name;
        pokeapi.number = req.body.number;
        pokeapi.type = req.body.type;
        pokeapi.ability = req.body.ability;
// save the contact and check for errors
        pokeapi.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'pokeapi Info updated',
                data: pokeapi
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    PokeApi.remove({
        _id: req.params.pokemon_id
    }, function (err, poke) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'pokemon deleted'
        });
    });
};


