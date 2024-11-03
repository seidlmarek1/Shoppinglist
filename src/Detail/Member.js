import { alignPropType } from "react-bootstrap/esm/types";

function Member({ data, handlerMap, isOwner, showRemoveButton }) {
  return (
    <div>
      {data.name}
      {isOwner ? " true " : " "}
      {showRemoveButton ? (
        <button onClick={() => handlerMap.removeMember({ memberId: data.id })} style={{ backgroundColor: "white", color: "black"}}>
          X
        </button>
      ) : null}
    </div>
  );
}

export default Member;
