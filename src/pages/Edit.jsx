import { Button } from "react-bootstrap";
import { exportComponentAsJPEG } from "react-component-export-image";
import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
const EditPage = ({ lightMode }) => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          width: "500px",
          border: "1px solid grey",
          color: lightMode ? "#000" : "#fff",
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
      <div style={{ display: "flex", gap: "1.3rem", paddingBottom: "2rem" }}>
        <Button onClick={addText}> Add Text</Button>
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
    </div>
  );
};
export default EditPage;
