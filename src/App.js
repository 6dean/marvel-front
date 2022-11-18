import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MES PAGES
import Home from "./Pages/Home";
import Comics from "./Pages/Comics";
import Characters from "./Pages/Characters";
import Character from "./Pages/Character";
import Favorites from "./Pages/favorites";

// MES COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  function SaveDataToLocalStorage(data) {
    let favFromUser = [];
    favFromUser = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favFromUser.some((id) => (id === data) === true)) {
      return null;
    } else {
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
        <Route
          path="/comics"
          element={<Comics SaveDataToLocalStorage={SaveDataToLocalStorage} />}
        ></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route
          path="/character"
          element={
            <Character SaveDataToLocalStorage={SaveDataToLocalStorage} />
          }
        ></Route>
        <Route
          path="/favorites"
          element={<Favorites array={localStorage.getItem("favorites")} />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
