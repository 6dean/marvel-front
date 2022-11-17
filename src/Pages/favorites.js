import axios from "axios";
import { useEffect, useState } from "react";

const Favorite = ({ array }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // let favArray = JSON.parse(array);

  useEffect(() => {
    const favArray = JSON.parse(array).map((elem, index) => {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3000/comics/${elem}`
        );
        setData(response.data);
        console.log({ index, isLoading });
        console.log(index, response.data);
        return response.data;
      };
      fetchData();
    });
    setData(favArray);
    setIsLoading(false);
    console.log(data);
  }, [array]);

  return isLoading ? (
    <div className="loading">
      <p className="loading-text">LOADING ...</p>
    </div>
  ) : (
    <div>{`${JSON.stringify(data)} ${data.length}`}</div>
  );
};

export default Favorite;
