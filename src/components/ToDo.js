import React from "react";

function ToDo({ todoObj, toDos, setToDos }) {
  return (
    <div className="todos">
      <div className="todo">
        <div className="left">
          <input
            onChange={(e) => {
              setToDos(
                toDos.filter((obj) => {
                  if (obj.id === todoObj.id) {
                    todoObj.status = e.target.checked;
                  }
                  return obj;
                })
              );
            }}
            type="checkbox"
            name=""
            id=""
            checked={todoObj.status}
          />
          <p>{todoObj.title}</p>
        </div>
        <div className="right">
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
