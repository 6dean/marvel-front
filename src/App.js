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
  //
  // FONCTION POUR ENREGISTRER LES PERSO EN LOCALSTORAGE

  function SaveDataToLocalStorage(data) {
    let favFromUser = [];
    favFromUser = JSON.parse(localStorage.getItem("favorites")) || [];
    // SI IL EXISTE DEJA, TU RETURN NULL

    if (favFromUser.some((id) => (id === data) === true)) {
      return null;
    } else {
      // SINON TU LE PUSH DANS LE TABLEAU

      favFromUser.push(data);
      localStorage.setItem("favorites", JSON.stringify(favFromUser));
      console.log(localStorage.getItem("favorites"));
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
