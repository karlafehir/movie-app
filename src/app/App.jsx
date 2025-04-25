import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FavoritesContainer from "../features/favorites/FavoritesContainer";
import HomePageContainer from "../features/home/HomePageContainer";
import MenuComponent from "../components/menu/Menu";
import "./App.css";
import MovieDetailsContainer from "../features/movieDetails/MovieDetailsContainer";

function App() {
  return (
    <Router>
      <div className="flex flex-row h-screen">
        <MenuComponent />
        <div className="flex-1 overflow-y-auto h-screen">
          <Routes>
            <Route path="/" element={<HomePageContainer />} />
            <Route path="/favorites" element={<FavoritesContainer />} />
            <Route path="/movie/:movieId" element={<MovieDetailsContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
