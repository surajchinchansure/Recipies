import React from "react";
import RecipeItem from "./Item";
import "./Item.css";
const List = (props) => {
  return (
    <>
      <div className="show">
        {props.data.map((map) => (
          <div key={map.recipe.label}>
            <RecipeItem data={map.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
