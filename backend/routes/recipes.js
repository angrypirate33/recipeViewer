const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe')

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find({}, 'title')
        res.json(recipes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', getRecipe, (req, res) => {
    res.json(res.recipe)
})

// Get recipe by ID
async function getRecipe(req, res, next) {
    let recipe
    try {
        recipe = await Recipe.findById(req.params.id)
        if (recipe == null) {
            return res.status(404).json({ message: 'Cannot find recipe.'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.recipe = recipe
    next()
}

module.exports = router