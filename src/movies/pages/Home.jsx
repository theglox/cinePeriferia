import MovieList from "../components/movie-list/MovieList";
import Slider from "../components/slider/Slider";

import { category, movieType } from "../../api/tmdbApi";

export const Home = () => {
  return (
    <>
      <Slider />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Todas las Peliculas Disponibles</h2>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>
      </div>
    </>
  );
};
