const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const pokemonController = require('../controllers/pokemonController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for pokemons, attach it to router along with the controller logic
router.get('/', pokemonController.index)

// Setup a "new" route for creating pokemon
router.get('/new', pokemonController.new)

// Setup a "clear" route for removing all data from pokemons collection
router.delete('/clear', pokemonController.clear)

// Setup a "delete" route for removing a specific pokemon
router.delete('/:id', pokemonController.delete)

// Setup a "update" route for updating a specific pokemon
router.put('/:id', pokemonController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', pokemonController.seed)

// Setup a "create" route for adding pokemon data
router.post('/', pokemonController.create)

// Setup a "edit" route for editing a pokemon
router.get('/:id/edit', pokemonController.edit)

// Setup an "show" route for pokemons, attach it to router along with the controller logic
router.get('/:id', pokemonController.show)


module.exports = router