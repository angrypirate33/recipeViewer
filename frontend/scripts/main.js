document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list')

    fetch('https://recipeviewer.fly.dev/api/recipes')
        .then(response => response.json())
        .then(recipes => {
            recipes.forEach(recipe => {
              const listItem = document.createElement('li')  
              const link = document.createElement('a')
              link.href = `recipe.html?id=${recipe._id}`
              link.textContent = recipe.title
              listItem.appendChild(link)
              recipeList.appendChild(listItem)

            })
        })
        .catch(error => {
            console.error('Error fetching recipes: ', error)
        })
})