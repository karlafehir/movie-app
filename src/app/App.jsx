import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FavoritesContainer from "../features/favorites/FavoritesContainer";
import HomePageContainer from "../features/home/HomePageContainer";
import MenuComponent from "../components/menu/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-row">
        <MenuComponent />
        <Routes>
          <Route path="/" element={<HomePageContainer />}></Route>
          <Route path="/favorites" element={<FavoritesContainer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
