import CardBank from "../../components/CardBank/cardBank";

function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
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

export default User;
