import Axios from "axios";
import Component from "./Component";
import { useEffect, useState } from "react";
export default function MainView() {
  const [data, setData] = useState([]);
  const appiCall = async function () {
    const data = await Axios.get(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    );
    const fetchedData = await data.data;
    setData(fetchedData);
    // console.log(fetchedData[0]);
  };

  useEffect(() => {
    appiCall();
  }, []);
  return (
    <>
      <Component data={data} />
    </>
  );
}
