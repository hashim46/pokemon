const pokemon = require('../models/pokemon')

// Load the Pokemon model
const Pokemon = require('../models/PokemonModel')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {

    try {
        // Use the Pokemon model to interact with the database
        // find will get all documents from the Pokemon collection
        const pokemon = await Pokemon.find() 
        console.log('inside controller')

        // Looks in the views folder for "pokemon/Index" and passes { pokemon } data to the view (kind of like a server props object)
        res.render('pokemon/Index', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    try {
        console.log(req.params.id)
        const pokemon = await Pokemon.findById(req.params.id)
        console.log(pokemon)
        res.render('pokemon/Show', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// GET /pokemon/new
module.exports.new = (req, res) => {
    res.render('pokemon/New')
}

// POST /pokemon
module.exports.create = async (req, res) => {
    

    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    try {
        // use the model to interact with db and create a new document in the pokemon collection
        const result = await Pokemon.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/pokemon')
}

// DELETE /pokemon/:id
module.exports.delete = async (req, res) => {
  
    try {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

// GET /pokemon/:name/edit
module.exports.edit = async (req, res) => {
  
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.render('pokemon/Edit', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

// PUT /pokemon/:id
module.exports.update = async (req, res) => {
 
    console.log(req.body)

    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

   try {
        // pass the id to find the document in the db and the form data (req.body) to update it
        await Pokemon.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/pokemon/${req.params.id}`)
   } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}

// POST /pokemon/seed
module.exports.seed = async (req, res) => {

    try {
        await Pokemon.deleteMany({})
        await Pokemon.create(pokemon)
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// DELETE /pokemon/clear
module.exports.clear = async (req, res) => {

    try {
        await Pokemon.deleteMany({})
        res.redirect('/pokemon')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}
