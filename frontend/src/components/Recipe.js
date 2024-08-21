import React from 'react';

const Recipe = ({ recipe }) => (
  <div>
    <h2>{recipe.title}</h2>
    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
    <p><strong>Instructions:</strong> {recipe.instructions}</p>
  </div>
);

export default Recipe;
