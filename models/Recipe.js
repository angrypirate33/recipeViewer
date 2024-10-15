const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    unit: String
})

const RecipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [IngredientSchema],
    instructions: [String]
})

module.exports = mongoose.model('Recipe', RecipeSchema)