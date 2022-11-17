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
    favFromUser = JSON.parse(localStorage.getItem("session")) || [];
    if (favFromUser.some((id) => (id === data) === true)) {
      localStorage.removeItem("session", JSON.stringify(favFromUser));
    } else {
      favFromUser.push(data);
      localStorage.setItem("session", JSON.stringify(favFromUser));
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
          element={<Favorites array={localStorage.getItem("session")} />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
