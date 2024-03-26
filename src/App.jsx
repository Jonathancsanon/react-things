import Bio from "./Bio";
import Clock from "./Clock";
import ColorSwitch from "./ColorSwitch";
// import Collapse from "./Collapse";
import Congratulations from "./Congratulations";
import DrinkList from "./DrinkList";
import Gallery from "./Gallery";
import LightSwitch from "./LightSwitch";
import List from "./List";
import PackingList from "./PackingList";
import Poem from "./Poem";
import RecipeList from "./RecipeList";
// import StoryTray from "./StoryTray";
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
      <Poem />
      <Clock />
      <LightSwitch />
      <ColorSwitch />
      {/* <Collapse /> */}
      {/* <StoryTray /> */}
    </>
  );
}

export default App;
