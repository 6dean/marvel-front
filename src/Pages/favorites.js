import axios from "axios";
import { useEffect, useState } from "react";

const Favorite = ({ array }) => {
  const [fav, setFav] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  let favo = [];

  const fetchData = () => {
    JSON.parse(array).map(async (id) => {
      const response = await axios.get(`http://localhost:3000/comics/${id}`);
      favo.push(response.data);
      setFav(favo);
      return;
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("Tableau de favoris =>", fav);

  return (
    <>
      {fav.map((elem, key) => {
        console.log(key);
        return (
          <div key={key} className="master-character-page">
            <div className="character-style-info">
              <div>
                <div className="character-id">
                  <div className="portrait">
                    <img
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="block-info">
                <div className="box-1">
                  <div className="text-style">Name</div>
                  <div>Description</div>
                </div>
                <div className="box-2">
                  <div className="text-style">{elem.name}</div>
                  <div>{elem.description === "" && "Unknow"}</div>
                </div>
              </div>
            </div>
            <div className="header-scroll-text">
              <p>Comics presence</p>
            </div>

            <div className="master-scrolling">
              <div className="scrolling-comics">
                {elem.comics.map((elem, index) => {
                  if (
                    elem.thumbnail.path ===
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                  ) {
                    return null;
                  } else {
                    return (
                      <div key={index} className="header-character">
                        <div className="comics-fit-scroll">
                          <img
                            src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                            alt="comics-list"
                            width="120px"
                          />
                        </div>
                        <div>
                          <div className="title-comics-scroll">
                            {elem.title}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Favorite;
