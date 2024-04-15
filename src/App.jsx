import "./App.css";
import ToDoList from "./ToDoList/ToDoList";
import Clock from "./Clock/Clock";
import Notes from "./Notes/Notes";
import Weather from "./Weather/Weather";
import Links from "./Links/Links";

function App() {
  return (
    <div>
      <Clock />
      <div className="wrapper">
        <div className="section-one">
          <ToDoList />
          <Notes />
          <Weather />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
