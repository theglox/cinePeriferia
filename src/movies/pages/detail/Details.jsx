import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../../api/tmdbApi";
import apiConfig from "../../../api/apiCofig";

import "./detail.scss";
import CastList from "./CastList";
import VideoList from "./VideoList";
import { category } from "../../../constants/constants";
import { OutlineButton } from "../../components/button/Button";
import Modal, { StepsContent } from "../../components/modal/Modal";

const Detail = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);

      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  const setModalActive = async () => {
    const modal = document.querySelector(`.modal`);
    modal.classList.toggle("active");
  };

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Reservar</h2>
                <PurchaseModal />
                <OutlineButton onClick={setModalActive}>
                  Reserva ahora
                </OutlineButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
const PurchaseModal = () => {
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <>
      <Modal active={false}>
        <StepsContent onClose={onClose}></StepsContent>
      </Modal>
    </>
  );
};
export default Detail;
