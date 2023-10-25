import "./App.css";
import { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={(e) => {
            toDo !== "" &&
              setToDos([
                ...toDos,
                { title: toDo, id: Date.now(), status: false },
              ]);
            setToDo("");
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div>
        <h2>Tasks</h2>
      </div>
      {toDos.map((todoObj, index) => {
        if (!todoObj.status) {
          return (
            <ToDo
              key={index}
              todoObj={todoObj}
              toDos={toDos}
              setToDos={setToDos}
            />
          );
        }
        return null;
      })}

      <div>
        <h2>Completed</h2>
        {toDos.map((todoObj, index) => {
          if (todoObj.status) {
            console.log("hi");
            return (
              <ToDo
                key={index}
                todoObj={todoObj}
                toDos={toDos}
                setToDos={setToDos}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
