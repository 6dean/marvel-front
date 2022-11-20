import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

/// ----------- FUNCTION & USESTATES ----------- ///

const Character = ({ SaveDataToLocalStorage }) => {
  const location = useLocation();
  const { id } = location.state;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://site--backend-marvel--6qn7tv96v7tt.code.run/comics/${id}`,
      {
        id: id,
      }
    );
    setData(response.data);
    console.log(data.description);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return isLoading ? (
    <body>
      <div className="bodY">
        <div class="loading-effect">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </body>
  ) : (
    <body className="bodyy">
      <div className="master-character-page">
        <div className="fav-button">
          <Link to="/characters">
            <button className="button-back">RETOUR</button>
          </Link>
          <button
            className="button"
            onClick={() => {
              SaveDataToLocalStorage(data._id);
              alert`Character added to fav !`;
            }}
          >
            ☆ ADD TO FAVORITES
          </button>
        </div>
        <div className="character-style-info">
          <div>
            <div className="character-id">
              <div className="portrait">
                <img
                  src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
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
              <div className="text-style-2">{data.name}</div>
              <div className="text-style-3">
                {data.description !== "" ? data.description : "unknow"}
              </div>
            </div>
          </div>
        </div>
        <div className="header-scroll-text">
          <p>Comics presence</p>
        </div>

        <div className="master-scrolling">
          <div className="scrolling-comics">
            {data.comics.map((elem, index) => {
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
                      <div className="title-comics-scroll">{elem.title}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Character;
