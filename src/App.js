import { useState } from "react";
import {daysOfWeek} from'./config/constants'
import ToDo from "./components/ToDo";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [showConfirm, setShowConfirm] = useState({
    show: false,
    id: undefined,
  });
  return (
    <>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {daysOfWeek[new Date().getDay()]} 🌝 ☕ </h2>
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
          {!!toDos.length && toDos.find((obj) => !obj.status) && <h2>Tasks</h2>}
        <div className="todos">
          {toDos.map((todoObj, index) => {
            if (!todoObj.status) {
              return (
                <ToDo
                  key={index}
                  todoObj={todoObj}
                  toDos={toDos}
                  setToDos={setToDos}
                  setShowConfirm={setShowConfirm}
                  showConfirm={showConfirm}
                />
              );
            }
            return null;
          })}
        </div>
          {toDos.find((obj) => obj.status) && <h2>Completed</h2>}
          <div className="todos">
            {toDos.map((todoObj, index) => {
              if (todoObj.status) {
                return (
                  <ToDo
                    key={index}
                    todoObj={todoObj}
                    toDos={toDos}
                    setToDos={setToDos}
                    setShowConfirm={setShowConfirm}
                    showConfirm={showConfirm}
                  />
                );
              }
              return null;
            })}
          </div>
      </div>
      <div>
        {showConfirm.show && (
          <Modal
            setShowConfirm={setShowConfirm}
            showConfirm={showConfirm}
            toDos={toDos}
            setToDos={setToDos}
          />
        )}
      </div>
    </>
  );
}

export default App;
