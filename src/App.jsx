import "./App.css";
import ToDoList from "./ToDoList/ToDoList";
import Clock from "./Clock/Clock";
import Notes from "./Notes/Notes";

function App() {
  return (
    <>
      <Clock />
      <div className="section-one">
        <ToDoList />
        <Notes />
      </div>
    </>
  );
}

export default App;
