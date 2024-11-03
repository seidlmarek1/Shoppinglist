import { useContext } from "react";
import { DetailContext } from "./DetailProvider";
import Item from "./Item";

function ItemList() {
  const { data, handlerMap, showResolved, toggleShowResolved } =
    useContext(DetailContext);

  return (
    <div style={{ border: "1px solid grey", margin: "8px", marginTop: "10px", padding: "8px", backgroundColor: "lightgrey", border: "2px solid black", minHeight: "500px"}}>
      Item list <button onClick={() => handlerMap.addItem()} style={{backgroundColor: "white", marginLeft: "10px" }}>Add item</button>
      <button onClick={() => toggleShowResolved()} style={{backgroundColor: "white",}}>
        {showResolved ? "Not bought items only" : "Bought items"}
      </button>
      <div>
        {data.itemList.map((item) => (
          <Item key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
