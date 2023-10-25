import React, { useState } from "react";
import ReactConfirmAlert from "react-confirm-alert";

function ToDo({ todoObj, toDos, setToDos }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirm = (e) => {
    
    setToDos(
      toDos.filter((obj) => {
        if (obj.id !== todoObj.id) {
          return obj;
        }
        return null;
      })
    );

    setShowConfirm(false)
  };
  return (
    <div className="todos">
      {showConfirm && (
        <ReactConfirmAlert
          title="Confirm Delete"
          message="Are you sure you want to delete this record?"
          buttons={[
            {
              label: "Yes",
              onClick: handleConfirm
            },
            {
              label: "No",
              onClick: () => setShowConfirm(!showConfirm),
            },
          ]}
        />
      )}

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
          <i
            onClick={(e) => setShowConfirm(true)}
            className="fas fa-times"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
