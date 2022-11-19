import axios from "axios";
import { useEffect, useState } from "react";

const Favorite = ({ array }) => {
  const [fav, setFav] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let favo = [];

  const fetchData = () => {
    JSON.parse(array).forEach(async (item, index) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${item}`
        );
        favo.push(response.data);
        setFav(favo);

        if (index === JSON.parse(array).length - 1) {
          setIsLoading(false);
        } else {
          setIsLoading(true);
        }

        return;
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <body>
      <div className="bodY">
        <div className="loading-effect">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </body>
  ) : (
    <body>
      {fav.map((elem, key) => {
        return (
          <div key={key} className="fav-card">
            <div>
              {" "}
              <div className="portrait-fav">
                <img
                  src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className="info-fav">
                <div>{elem.name}</div>
                <div className="apparition">comics presence</div>
              </div>

              <div className="master-scrolling-fav">
                <div className="scrolling-comics-fav">
                  {elem.comics.map((elem, index) => {
                    if (
                      elem.thumbnail.path ===
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                    ) {
                      return null;
                    } else {
                      return (
                        <div className="header-character-fav">
                          <div className="comics-fit-scroll-fav">
                            <img
                              src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                              alt="comics-list"
                              width="30px"
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </body>
  );
};

export default Favorite;
