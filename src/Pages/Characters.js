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
    <div className="loading">
      <>
        <p className="loading-text">LOADING ... </p>
      </>
    </div>
  ) : (
    <>
      <div className="search-bar">
        <input
          onChange={(elem) => {
            setName(elem.target.value);
          }}
        ></input>
      </div>

      <div className="page-select">
        {skip === 0 ? null : (
          <button
            onClick={() => {
              setSkip(skip - 100);
              window.onbeforeunload = function () {
                window.scrollTo(0, 0);
              };
            }}
          >
            PAGE PRECEDENTE
          </button>
        )}
        <button
          onClick={() => {
            setSkip(skip + 100);
          }}
        >
          PAGE SUIVANTE
        </button>
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
                <Link to="/character" state={{ id: elem._id }}>
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

      <div>
        {skip === 0 ? null : (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#">
            <button
              onClick={() => {
                setSkip(skip - 100);
                window.onbeforeunload = function () {
                  window.scrollTo(0, 0);
                };
              }}
            >
              PAGE PRECEDENTE
            </button>
          </a>
        )}
        <a href="#">
          <button
            onClick={() => {
              setSkip(skip + 100);
            }}
          >
            PAGE SUIVANTE
          </button>
        </a>
      </div>
    </>
  );
};

export default Characters;
