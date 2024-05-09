import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./movieList.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import tmdbApi from "../../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      response = await tmdbApi.getMoviesList(props.type, { params });

      setItems(response.results);
    };
    getList();
  }, []);

  return (
    <>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
