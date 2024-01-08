import "./Modal.css";

function Modal({ showConfirm, setShowConfirm, setToDos, toDos }) {
  const handleConfirm = (e) => {
    setToDos(
      toDos.filter((obj) => {
        if (obj.id !== showConfirm.id) {
          return obj;
        }
        return null;
      })
    );
    setShowConfirm({ show: false, id: undefined });
  };
  return (
    <div className="modal">
      <div className="modal-content ">
        <span
          className="close fas fa-times"
          onClick={() =>
            setShowConfirm({ show: !showConfirm.show, id: undefined })
          }
          title="close modal"
        ></span>
        <div className="container ">
          <h1>Delete Todo</h1>
          <p>Are you sure you want to delete this Todo?</p>
          <div className="clearfix">
            <button
              className="cancelbtn"
              onClick={() =>
                setShowConfirm({ show: !showConfirm.show, id: undefined })
              }
            >
              No
            </button>
            <button className="deletebtn" onClick={handleConfirm}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
