import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, putUser } from "../../redux/reducers/asyncThunk";

function Modal(isOpen) {
  const userInfo = useSelector((state) => state.user.information);
  const token = useSelector((state) => state.auth.token);
  const formModal = useRef();
  const dispatch = useDispatch();

  async function handleFormModal(e) {
    e.preventDefault();
    const postData = { userName: formModal.current[0].value };
    try {
      dispatch(putUser({ postData, token }));
    } catch (error) {
      console.log("une erreur es survenue :" + error);
    } finally {
      dispatch(getUser(token));
    }
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
            <input
              type="text"
              id="userName"
              defaultValue={userInfo?.userName}
            />
          </div>
          <div className="modal-form__section__input inputLock">
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              defaultValue={userInfo?.firstName}
              className="labelLock"
            />
          </div>
          <div className="modal-form__section__input inputLock">
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              defaultValue={userInfo?.lastName}
              className="labelLock"
            />
          </div>
          <div className="modal-form__section__submit">
            <button className="modal-form__section__submit__button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
