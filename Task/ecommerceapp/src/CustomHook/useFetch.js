import axios from "axios";
import { useEffect, useState } from "react";

function useFetch() {
  let [data, setData] = useState([]);

  let updateData = async () => {
    try {
      let movieData = await axios.get("https://fakestoreapi.com/products");
      console.log(movieData);
      setData([...movieData.data]);
    } catch (error) {
      return error;
    }
  };

  useEffect(()=>{
    updateData()
  },[])

  return data
}

export default useFetch;
