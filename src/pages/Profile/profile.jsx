import { useDispatch, useSelector } from "react-redux";
import CardBank from "../../components/CardBank/cardBank";
import Modal from "../../components/Modal/modal";
import { useEffect, useState } from "react";
import { isEmpty } from "../../components/UTILS/isEmpty";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/reducers/asyncThunk";

function Profile() {
  const userInfo = useSelector((state) => state.user.information);
  const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(token)) {
      navigate("/profile");
      dispatch(getUser(token));
    } else navigate("/");
  }, []);

  function toggleModal() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br /> {userInfo?.firstName} {userInfo?.lastName} !
        </h1>
        <button className="edit-button" onClick={toggleModal}>
          Edit Name
        </button>
        <Modal element={isOpen} />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <CardBank
        key={"j9874ghs"}
        title={"Argent Bank Checking (x8349)"}
        ammount={"$2,082.79"}
        description={"Available Balance"}
      />
      <CardBank
        key={"524jkrtf"}
        title={"Argent Bank Savings (x6712)"}
        ammount={"$10,928.42"}
        description={"Available Balance"}
      />
      <CardBank
        key={"5678jdr4h"}
        title={"Argent Bank Credit Card (x8349"}
        ammount={"$184.30"}
        description={"Current Balance"}
      />
    </main>
  );
}

export default Profile;
