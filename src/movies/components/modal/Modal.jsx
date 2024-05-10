import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./modal.scss";
import Tickets from "../../../Tickets/pages/Tickets";
import FormUser from "../../../Tickets/pages/FormUser";
import TransactionSummary from "../../../Tickets/components/summary/TransactionSummary ";
import { useSelector } from "react-redux";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
        <h1>x</h1>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export const StepsContent = (props) => {
  const contentRef = useRef(null);
  const { isPayed } = useSelector((state) => state);
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  const [step, setStep] = useState(1);

  // Funciónes para pasarle a los botnoes

  const actionBack = () => {
    setStep(step - 1);
  };
  const actionContinue = () => {
    setStep(step + 1);
  };
  // Renderizado del contenido de cada paso
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Paso 1: Selección de horario, tickets y sillas</h2>
            <Tickets />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Paso 2: Formulario de pago</h2>
            <FormUser></FormUser>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Paso 3: Confirmación</h2>
            <TransactionSummary />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={contentRef} className="modal__content">
      <div>
        <p>Paso {step} de 3</p>
      </div>
      {renderStepContent()}
      <StepButtons
        actionBack={actionBack}
        actionContinue={actionContinue}
        isPayed={isPayed}
        step={step}
      />
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
        <h1>x</h1>
      </div>
    </div>
  );
};

StepsContent.propTypes = {
  onClose: PropTypes.func,
};

// TODO: ESTO SE PUEDE SACAR EN UN COMPONENTE APARTE:

const StepButtons = ({ actionBack, actionContinue, isPayed, step }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!isPayed && step === 2) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isPayed, step]);
  if (step === 3) {
    return null;
  }

  return (
    <>
      {step > 1 && ( // Verifica si el paso actual es mayor que 1
        <button className="btn small" onClick={actionBack}>
          Regresar
        </button>
      )}
      <button
        className="btn small"
        disabled={isDisabled}
        onClick={actionContinue}
      >
        Continuar
      </button>
    </>
  );
};

export default Modal;
