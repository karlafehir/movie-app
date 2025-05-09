import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FavoritesContainer from "../features/favorites/FavoritesContainer";
import HomePageContainer from "../features/home/HomePageContainer";
import MenuComponent from "../components/menu/Menu";
import "./App.css";
import MovieDetailsContainer from "../features/movieDetails/MovieDetailsContainer";
import { ConfigProvider, theme } from "antd";
import GenresPageContainer from "../features/genres/GenresPageContainer";
import ActorsPageContainer from "../features/actors/ActorsPageContainer";
import ActorDetailsContainer from "../features/actorDetails/ActorDetailsContainer";

function App() {
  return (
    <Router>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: "#ff5100",
            colorBgBase: "rgb(255,255,255, 0.3)",
            borderRadius: 8,
            lineWidth: 1,
            colorBgContainer: "rgb(255,255,255, 0.1)",
          },
        }}
      >
        <div className="flex flex-row h-screen">
          <MenuComponent />
          <div className="flex-1 overflow-y-auto h-screen p-10">
            <Routes>
              <Route path="/" element={<HomePageContainer />} />
              <Route path="/favorites" element={<FavoritesContainer />} />
              <Route path="/genres" element={<GenresPageContainer />} />
              <Route path="/actors" element={<ActorsPageContainer />} />
              <Route
                path="/movie/:movieId"
                element={<MovieDetailsContainer />}
              />
              <Route
                path="/actor/:actorId"
                element={<ActorDetailsContainer />}
              />
            </Routes>
          </div>
        </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
