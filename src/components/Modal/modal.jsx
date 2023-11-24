import { useRef } from "react";
import { useSelector } from "react-redux";

function Modal(isOpen) {
  const userInfo = useSelector((state) => state.userReducer.body);
  const formModal = useRef();

  function handleFormModal() {
    console.log(formModal);
  }

  return (
    <div className={`modal-form-wrapper ${isOpen.element ? "modal-off" : ""}`}>
      <form
        ref={formModal}
        onSubmit={(e) => handleFormModal(e)}
        className="modal-form">
        <h2 className="modal-form--title">Edit User Info</h2>
        <div className="modal-form__section">
          <div className="modal-form__section__input">
            <label htmlFor="userName">User Name :</label>
            <input type="text" id="userName" value={userInfo?.userName} />
          </div>
          <div className="modal-form__section__input inputLock">
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              value={userInfo?.firstName}
              readOnly
              className="labelLock"
            />
          </div>
          <div className="modal-form__section__input inputLock">
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              value={userInfo?.lastName}
              readOnly
              className="labelLock"
            />
          </div>
          <div className="modal-form__section__submit">
            <button className="modal-form__section__submit__button">
              Submit
            </button>
            <button className="modal-form__section__submit__button">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
