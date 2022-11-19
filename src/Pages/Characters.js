/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [skip, setSkip] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:3000/characters?name=${name}&skip=${skip}`
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [name, skip]);

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
    <body>
      <div className="pagination">
        <div>
          {skip === 0 ? (
            <button className="paging-0">
              <p className="paging-text-0">NONE</p>
            </button>
          ) : (
            <button
              className="paging"
              onClick={() => {
                setSkip(skip - 100);
                window.onbeforeunload = function () {
                  window.scrollTo(0, 0);
                };
              }}
            >
              PREVIOUS
            </button>
          )}
        </div>
        <div className="search-bar">
          <input
            onChange={(elem) => {
              setName(elem.target.value);
            }}
            type="text"
            placeholder="SEARCH"
          ></input>
        </div>
        <div>
          {data.count > 100 ? (
            <button
              className="paging"
              onClick={() => {
                setSkip(skip + 100);
                window.scroll(0, 0);
              }}
            >
              NEXT
            </button>
          ) : (
            <button className="paging-0">
              <p className="paging-text-0">NONE</p>
            </button>
          )}
        </div>
      </div>

      <div className="listing-characters">
        {data.results.map((elem, index) => {
          if (
            elem.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return null;
          } else {
            return (
              <div className="card-character" key={index}>
                <Link
                  to="/character"
                  onClick={() => window.scrollTo(0, 0)}
                  state={{ id: elem._id }}
                >
                  <div className="img-fit-C">
                    <img
                      className="character-img"
                      src={
                        `${elem.thumbnail.path}.${elem.thumbnail.extension}` !==
                        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                          ? `${elem.thumbnail.path}.${elem.thumbnail.extension}`
                          : "https://tinyurl.com/mr467zre"
                      }
                      alt="character"
                      width="200px"
                    />
                  </div>
                  <div className="separator"></div>
                  <div className="title-card-charac">
                    <div>
                      <p className="title-character">{elem.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>

      <div className="pagination-bottom">
        <div>
          {skip === 0 ? (
            <button className="paging-0">
              <p className="paging-text-0">NONE</p>
            </button>
          ) : (
            <button
              className="paging"
              onClick={() => {
                setSkip(skip - 100);
                window.onbeforeunload = function () {
                  window.scrollTo(0, 0);
                };
              }}
            >
              PREVIOUS
            </button>
          )}
        </div>
        <div>
          {data.count > 100 ? (
            <button
              className="paging"
              onClick={() => {
                setSkip(skip + 100);
                window.scroll(0, 0);
              }}
            >
              NEXT
            </button>
          ) : (
            <button className="paging-0">
              <p className="paging-text-0">NONE</p>
            </button>
          )}
        </div>
      </div>
    </body>
  );
};

export default Characters;
