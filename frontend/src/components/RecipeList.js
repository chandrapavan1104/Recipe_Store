import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/recipes/', newRecipe)
      .then(response => setRecipes([...recipes, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Recipe Store</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={newRecipe.title} 
          onChange={e => setNewRecipe({ ...newRecipe, title: e.target.value })} 
        />
        <textarea 
          placeholder="Ingredients" 
          value={newRecipe.ingredients} 
          onChange={e => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} 
        />
        <textarea 
          placeholder="Instructions" 
          value={newRecipe.instructions} 
          onChange={e => setNewRecipe({ ...newRecipe, instructions: e.target.value })} 
        />
        <button type="submit">Add Recipe</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
