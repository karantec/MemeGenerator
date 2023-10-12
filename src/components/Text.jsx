import React, { useState } from "react";
import Draggable from "react-draggable";
const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");
  const [text,setText] = useState("");
  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={(e) => setEditMode(false)}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <h2 onDoubleClick={(e) => setEditMode(true)}>{val}</h2>
      )}
    </Draggable>
  );
};

export default Text;
