import React, { useState } from "react";

import List from "./List";

const Recipe = () => {
  const keys = "b0dcb5f28ceea46ab67a3daa2a9c448b";
  const [data, setData] = useState();
  const [value, setValue] = useState("");
  const id = "bdcfa613";

  const Search = () => {
    if (value.length === 0) {
      setData();
    } else {
      getData();
    }
  };

  const getData = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=${id}&app_key=${keys}`
    );

    const data = await response.json();
    setData(data.hits);
  };

  const searching = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={searching} />
      <button type="Submit" onClick={Search}>
        Search
      </button>

      {data && <List data={data} />}
    </div>
  );
};

export default Recipe;
