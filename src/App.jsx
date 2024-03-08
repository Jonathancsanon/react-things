import Bio from "./Bio";
import Congratulations from "./Congratulations";
import DrinkList from "./DrinkList";
import Gallery from "./Gallery";
import List from "./List";
import PackingList from "./PackingList";
import RecipeList from "./RecipeList";
import TodoList from "./ToDoList";

function App() {
  return (
    <>
      <Gallery />
      <Congratulations />
      <Bio />
      <TodoList />
      <PackingList />
      <DrinkList />
      <List />
      <RecipeList />
    </>
  );
}

export default App;
