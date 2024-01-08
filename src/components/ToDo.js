function ToDo({ todoObj, toDos, setToDos, setShowConfirm, showConfirm }) {
  return (
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
          onClick={(e) =>
            setShowConfirm({ show: !showConfirm.show, id: todoObj.id })
          }
          className="fas fa-times"
        ></i>
      </div>
    </div>
  );
}

export default ToDo;
