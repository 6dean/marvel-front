const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="footer-text">
          <div className="details"> ABOUT MARVEL</div>
          <div className="details">DISNEY +</div>
          <div className="details">MADE BY DEAN</div>
          <div className="details">2022 / PHOENIX</div>
        </div>
        <div className="footer-center">
          <div>
            <a href="https://www.marvel.com/">
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1668887083/my-content/03_k1hvbz.png"
                alt=""
                width="50px"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="detail">
            <a href="https://fr.reactjs.org/">
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1668887083/my-content/02_azuwye.png"
                alt="icon"
                width="80px"
              />
            </a>
          </div>
          <div className="details">
            <a href="https://www.lereacteur.io/">
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1668887083/my-content/logo-le-reacteur-2_lztxwu.png"
                alt="icon"
                width="110px"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
