import { useState } from "react";

function Item({ data, handlerMap }) {
  const [value, setValue] = useState(data.name);

  return (
    <div>
      <input
        style={{border: "1px solid black"}}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
      />{" "}
      <button onClick={() => handlerMap.toggleResolveItem({ id: data.id })} style={{backgroundColor: "white"}}>
        {data.resolved ? "Deselect" : "Select"}
      </button>
      <button onClick={() => handlerMap.deleteItem({ id: data.id })} style= {{backgroundColor: "white"}}>
        delete
      </button>
    </div>
  );
}

export default Item;
