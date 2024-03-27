import React, { useState } from "react";
import "./Item.css";
import ViewItem from "./View";

const Item = (props) => {
  const [isItemVisible, setItemVisible] = useState(false);
  const item = props.data;

  const toggleItemVisibility = () => {
    setItemVisible(!isItemVisible);
  };

  return (
    <>
      <div className="itemContainer">
      <img className="itemImage" src={item.image} alt="Img" />
        <p>{item.label}</p>
        <button type="button" onClick={toggleItemVisibility}>
          {isItemVisible ? "Hide" : "View"}
        </button>
      </div>
      {isItemVisible && <ViewItem item={item} />}
    </>
  );
};

export default Item;
