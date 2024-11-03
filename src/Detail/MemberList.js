import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import AddMemberForm from "./AddMemberForm";
import Member from "./Member";

function MemberList() {
  const { data, handlerMap } = useContext(DetailContext);
  const { userMap, userList, loggedInUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative", height: "100%" }}>
  <div
    style={{
      position: "absolute",
      top: "-55px",
      right: "8px",
      border: "2px solid black",
      margin: "0px",
      padding: "7px",
      backgroundColor: "grey",
    }}
  >
    <AddMemberForm
      show={show}
      data={data}
      userList={userList}
      handlerMap={handlerMap}
      handleClose={() => setShow(false)}
    />

    <div>
      Members{" "}
     {data.owner === loggedInUser ? (
        <button onClick={() => setShow(true)}
           style={{ backgroundColor: "white", color: "black" }}>Add member</button>
  ) : (
    ""
  )}
</div>

    <Member memberId={data.owner} data={userMap[data.owner]} isOwner={true} />
    {data.memberList.map((memberId) => (
      <Member
        key={memberId}
        memberId={memberId}
        data={userMap[memberId]}
        handlerMap={handlerMap}
        showRemoveButton={
          loggedInUser === data.owner || memberId === loggedInUser
        }
      />
    ))}
  </div>
</div>

  );
}

export default MemberList;
