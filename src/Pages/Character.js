import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useLocation } from "react-router-dom";

/// ----------- FUNCTION & USESTATES ----------- ///

const Character = ({ SaveDataToLocalStorage }) => {
  const location = useLocation();
  const { id } = location.state;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/comics/${id}`, {
      id: id,
    });
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return isLoading ? (
    <div className="loading">
      <p className="loading-text">LOADING ...</p>
    </div>
  ) : (
    <>
      <div className="master-character-page">
        <div className="fav-button">
          <button
            className="button"
            onClick={() => {
              SaveDataToLocalStorage(data._id);
            }}
          >
            FAV
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
              <div className="text-style">{data.name}</div>
              <div>{data.description === "" && "Unknow"}</div>
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
    </>
  );
};

export default Character;
