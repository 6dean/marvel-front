import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://site--backend-marvel--6qn7tv96v7tt.code.run/comics?title=spider-man`
    );
    const sndResponse = await axios.get(
      `https://site--backend-marvel--6qn7tv96v7tt.code.run/comics?title=venom`
    );
    const trsResponse = await axios.get(
      `https://site--backend-marvel--6qn7tv96v7tt.code.run/comics?title=hulk`
    );
    setData(response.data);
    setData2(sndResponse.data);
    setData3(trsResponse.data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <body>
      {" "}
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
    <body className="home-page">
      <div className="banner-home">
        <div className="header-banner">
          <div>
            <p className="banner-text-spider">SPIDERMAN COMICS</p>
          </div>
          <div className="banner-text">Top Search</div>
        </div>
        <img
          className="banner"
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1668946184/my-content/003_vnsudu.jpg"
          alt="spiderman"
          width="500px"
        />
      </div>
      <div className="master-scrolling-home">
        <div className="scrolling-comics-home">
          {" "}
          {data.results.slice(30, 35).map((elem, index) => {
            if (
              elem.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ) {
              return null;
            } else {
              return (
                <div className="home-img" key={index}>
                  <div className="comics-fit-scroll-home">
                    <img
                      className="comics-img"
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt="comics"
                    />
                  </div>
                  <div>
                    <p className="title-comics-home">{elem.title}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="banner-home">
        <img
          className="banner"
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1668946184/my-content/002_gryqcq.jpg"
          alt="Venom"
          width="500px"
        />
        <div className="header-banner">
          <div>
            <p className="banner-text-venom">VENOM COMICS</p>
          </div>
          <div className="banner-text-v">Last Sales</div>
        </div>
      </div>
      <div className="master-scrolling-home">
        <div className="scrolling-comics-home">
          {data2.results.slice(50, 55).map((elem, index) => {
            if (
              elem.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ) {
              return null;
            } else {
              return (
                <div className="home-img-v" key={index}>
                  <div className="comics-fit-scroll-home">
                    <img
                      className="comics-img"
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt="comics"
                    />
                  </div>
                  <div>
                    <p className="title-comics-home-v">{elem.title}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="banner-home">
        <div className="header-banner">
          <div>
            <p className="banner-text-hulk">HULK COMICS</p>
          </div>
          <div className="banner-text">Lastest Releases</div>
        </div>
        <img
          className="banner"
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1668946184/my-content/001-1_muujtt.jpg"
          alt="HULK"
          width="500px"
        />
      </div>
      <div className="master-scrolling-home">
        <div className="scrolling-comics-home">
          {data3.results.slice(66, 71).map((elem, index) => {
            if (
              elem.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ) {
              return null;
            } else {
              return (
                <div className="home-img" key={index}>
                  <div className="comics-fit-scroll-home">
                    <img
                      className="comics-img"
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt="comics"
                    />
                  </div>
                  <div>
                    <p className="title-comics-home">{elem.title}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </body>
  );
};

export default Home;
