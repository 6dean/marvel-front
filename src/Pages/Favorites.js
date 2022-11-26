const Favorite = ({ FavCharacters }) => {
  if (JSON.parse(FavCharacters) === undefined) {
    return JSON.parse(FavCharacters) ? (
      <body className="bodyyy">
        {JSON.parse(FavCharacters).map((elem, key) => {
          return (
            <div key={key} className="fav-card">
              <div>
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
    ) : (
      <body className="bodyyy"></body>
    );
  } else {
    return <body className="bodyyy"></body>;
  }
};

export default Favorite;
