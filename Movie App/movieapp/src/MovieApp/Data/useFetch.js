
import axios from "axios";

const useFetch = async (query) => {
 
  const url =  `https://www.omdbapi.com/?s=${query}&apikey=b30e7222`;

  try {
    const response = await axios.get(url);
    return response.data.Search || [];  
  } catch (error) {
    console.error("Error fetching movie data: ", error);
    return [];
  }
};

export default useFetch;
