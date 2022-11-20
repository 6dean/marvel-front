import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MES PAGES
import Home from "./Pages/Home";
import Comics from "./Pages/Comics";
import Characters from "./Pages/Characters";
import Character from "./Pages/Character";
import Favorites from "./Pages/Favorites";

// MES COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  function SaveDataToLocalStorage(data) {
    // FONCTION POUR ENREGISTRER LES PERSO EN LOCALSTORAGE

    let favFromUser = [];
    favFromUser = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favFromUser.some((id) => (id === data) === true)) {
      return alert`This Character is already in your favorites !`;
      // SI IL EXISTE DEJA, TU RETURN ALERT
    } else {
      favFromUser.push(data);
      localStorage.setItem("favorites", JSON.stringify(favFromUser));
      alert`Character added to fav !`;
      // SINON TU LE PUSH DANS LE TABLEAU
    }
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route
          path="/character"
          element={
            <Character SaveDataToLocalStorage={SaveDataToLocalStorage} />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites FavCharacters={localStorage.getItem("favorites")} />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
