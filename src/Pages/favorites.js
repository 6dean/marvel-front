import axios from "axios";
import { useEffect, useState } from "react";

const Favorite = ({ array }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // let favArray = JSON.parse(array);

  useEffect(() => {
    const characters = [];
    for (let i = 0; i < JSON.parse(array).length; i++) {
      const element = JSON.parse(array)[i];
      // requête
      const response = await;
      characters.push(response.data);
    }
    setData(characters);
    /* const favArray = JSON.parse(array).map((elem, index) => {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3000/comics/${elem}`
        );
        // setData(response.data);
        console.log({ index, isLoading });
        console.log(index, response.data);
        return response.data;
      };
      fetchData(_id);
    });
    setData(favArray); */
    setIsLoading(false);
  }, []);

  return isLoading || !data.length ? (
    <div className="loading">
      <p className="loading-text">LOADING ...</p>
    </div>
  ) : (
    <div>
      {/* {data.map((elem, index) => {
        if (elem) {
          console.log({ index, elem });
          console.log(Object.keys(elem));
          return <div key={index}>{elem._id}</div>;
        }
        return null;
      })} */}
      {`${JSON.stringify(data)} ${data.length}`}
    </div>
  );
};

export default Favorite;
