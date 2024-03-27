import React from "react";

const Show = (props) => {
  const item = props.item;
  console.log(item.totalNutrients);
  return (
    <>
      <div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Cuisine Type</td>
              <td>
                {item.cuisineType.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Calorie's</td>
              <td>{item.calories}</td>
            </tr>

            <tr>
              <td>Ingredients</td>
              <td>
                {item.ingredientLines.map((res) => (
                  <li>{res}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>TotalNutrients</td>
              <td>
                <li>
                  {`${item.totalNutrients.FAT.label} = 
                  ${item.totalNutrients.FAT.quantity}
                  ${item.totalNutrients.FAT.unit}`}
                </li>
                <li>
                  {`${item.totalNutrients.FASAT.label} = 
                  ${item.totalNutrients.FASAT.quantity}
                  ${item.totalNutrients.FASAT.unit}`}
                </li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Show;
