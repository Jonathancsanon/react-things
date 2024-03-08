import { recipes } from "./data.js";

export default function RecipeList() {
  const salads = recipes.map((food, index) => (
    <div key={index}>
      <h2>{food.name}</h2>

      <ul>
        {food.ingredients.map((ingredient, n) => (
          <li key={n}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Recipes</h1>
      <>{salads}</>
    </div>
  );
}

// solution
// import { recipes } from './data.js';

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map(ingredient =>
//               <li key={ingredient}>
//                 {ingredient}
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
