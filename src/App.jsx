import Bio from "./Bio";
import Congratulations from "./Congratulations";
import Gallery from "./Gallery";
import { Profile } from "./Profile";
import TodoList from "./ToDoList";

function App() {
  return (
    <>
      <Gallery />
      <Congratulations />
      <Profile />
      <Bio />
      <TodoList />
    </>
  );
}

export default App;
