import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          handleClick={() => removeColor(color.name)}
          name={color.name}
          key={color.name}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
