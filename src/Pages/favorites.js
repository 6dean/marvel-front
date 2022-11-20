import axios from "axios";
import { useEffect, useState } from "react";

const Favorite = ({ FavCharacters }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let arrayFavorites = [];

  const fetchData = () => {
    JSON.parse(FavCharacters) !== null
      ? JSON.parse(FavCharacters).forEach(async function (id) {
          try {
            const response = await axios.get(
              `https://site--backend-marvel--6qn7tv96v7tt.code.run/comics/${id}`
            );
            arrayFavorites.push(response.data);
            setFavorites(arrayFavorites);

            if (arrayFavorites.length === JSON.parse(FavCharacters).length) {
              setIsLoading(false);
            } else {
              setIsLoading(true);
            }

            return;
          } catch (error) {
            console.log(error);
          }
        })
      : setIsLoading(false);
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
    <body className="bodyyy">
      {favorites.map((elem, key) => {
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
