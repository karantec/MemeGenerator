import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllMemes } from "../api/memes";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div id="img-wrapper">
      {data.map((el) => (
        <MemeCard img={el.url} title={el.name} />
      ))}
    </div>
  );
};
export default Home;
