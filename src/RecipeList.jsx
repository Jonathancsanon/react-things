import { recipes } from "./data.js";

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>

      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
        // {...recipe} <- spread operator
      ))}
    </div>
  );
}

// solution i came up with challenge 2
// export default function RecipeList() {
//   const salads = recipes.map((food, index) => (
//     <div key={index}>
//       <h2>{food.name}</h2>

//       <ul>
//         {food.ingredients.map((ingredient, n) => (
//           <li key={n}>{ingredient}</li>
//         ))}
//       </ul>
//     </div>
//   ));

//   return (
//     <div>
//       <h1>Recipes</h1>
//       <>{salads}</>
//     </div>
//   );
// }
