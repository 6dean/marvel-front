import axios from "axios";
import { useEffect, useState } from "react";

const Comics = ({ SaveDataToLocalStorage }) => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:3000/comics?title=${title}&skip=${skip}`
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [title, skip]);

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
            setTitle(elem.target.value);
          }}
        ></input>
      </div>
      <div className="pagination">
        <div>
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
              window.scroll(0, 0);
            }}
          >
            PAGE SUIVANTE
          </button>
        </div>
      </div>

      <div className="listing-comics">
        {data.results.map((elem, index) => {
          if (
            elem.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return null;
          } else {
            return (
              <div className="card" key={index}>
                <div className="img-fit">
                  <div className="description">{elem.description}</div>
                  <img
                    onClick={() => {
                      SaveDataToLocalStorage(elem._id);
                    }}
                    className="comics-img"
                    src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                    alt="comics"
                    width="200px"
                  />
                </div>
                <div className="title-card">
                  <div>
                    <p className="title-comics">{elem.title}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>
        {skip === 0 ? null : (
          <button
            onClick={() => {
              setSkip(skip - 100);
              window.scrollTo(0, 0);
            }}
          >
            PAGE PRECEDENTE
          </button>
        )}
        <button
          onClick={() => {
            setSkip(skip + 100);
            window.scrollTo(0, 0);
          }}
        >
          PAGE SUIVANTE
        </button>
      </div>
    </>
  );
};

export default Comics;
