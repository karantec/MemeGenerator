import { Button } from "react-bootstrap";
import { exportComponentAsJPEG } from "react-component-export-image";
import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const addText = () => {
    setCount(count + 1);
  };
  const btn1Style={
    marginRight:'20px'
  }
  return (
    <div>
      <div
        style={{
          width: "500px",
          border: "1px solid",
        }}
        ref={memeRef}
        class="meme mt-5 mb-5"
      >
        <img src={params.get("url")} width="250px" alt="" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button style={btn1Style} onClick={addText}> Add Text</Button>
      <Button
        variant="success"
        onClick={(e) => {
          exportComponentAsJPEG(memeRef);
        }}
      >
        {" "}
        Save Text
      </Button>
    </div>
  );
};
export default EditPage;
