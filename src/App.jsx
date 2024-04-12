import "./App.css";
import ToDoList from "./ToDoList/ToDoList";
import Clock from "./Clock/Clock";
import Notes from "./Notes/Notes";
import Weather from "./Weather/Weather";

function App() {
  return (
    <>
      <Clock />
      <div className="section-one">
        <ToDoList />
        <Notes />
      </div>
      <Weather />
    </>
  );
}

export default App;
