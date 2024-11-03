import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", border: "2px solid black", margin: "8px",marginBottom: "30px", marginTop: "10px", padding: "8px", backgroundColor: "lightgrey" }}>
      <h1 style= {{fontWeight: "bold"}}>My shopping lists{" "}</h1>
      <div style={{display:"grid"}}>
      {userList.map((user) => (
        <button key={user.id} onClick={() => setLoggedInUser(user.id)} style={{color: user.id === loggedInUser ? "green" : "black",}}>
          {user.name} 
          {/* {(user.id === loggedInUser).toString()} */}
        </button>
      ))}
      </div>
    </div>
  );
}

export default Header;
