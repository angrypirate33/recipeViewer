document.addEventListener('DOMContentLoaded', () => {
    const recipeId = getQueryParam('id')
    if (!recipeId) {
      alert('No recipe ID provided.')
      window.location.href = 'index.html'
      return
    }
  
    fetch(`http://localhost:8000/api/recipes/${recipeId}`)
      .then(response => response.json())
      .then(recipe => {
        document.getElementById('recipe-title').textContent = recipe.title
  
        const ingredientsList = document.getElementById('ingredients-list')
        recipe.ingredients.forEach(ingredient => {
          const listItem = document.createElement('li')
          listItem.textContent = `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`
          ingredientsList.appendChild(listItem)
        })
  
        const instructionsList = document.getElementById('instructions-list')
        recipe.instructions.forEach(instruction => {
          const listItem = document.createElement('li')
          listItem.textContent = instruction
          instructionsList.appendChild(listItem)
        })
      })
      .catch(error => {
        console.error('Error fetching recipe:', error)
        alert('Error fetching recipe details.')
        window.location.href = 'index.html'
      })
  })
  
  // Helper function to get query parameters
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
  }
  
  