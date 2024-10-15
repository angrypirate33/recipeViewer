document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list')

    fetch('https://find-port-number/api/recipes')
        .then(resposne => response.json())
        .then(recipes => {
            recipes.array.forEach(recipe => {
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