import { useSelector } from "react-redux";
import CardBank from "../../components/CardBank/cardBank";
import Modal from "../../components/Modal/modal";
import { useState } from "react";

function Profile() {
  const [isOpen, setIsOpen] = useState(true);
  const userInfo = useSelector((state) => state.userReducer.body);

  function toggleModal() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userInfo?.firstName} {userInfo?.lastName} !
        </h1>
        <button className="edit-button" onClick={toggleModal}>
          Edit Name
        </button>
        <Modal element={isOpen} />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <CardBank />
      <CardBank />
      <CardBank />
      <CardBank />
      <CardBank />
      <CardBank />
    </main>
  );
}

export default Profile;
