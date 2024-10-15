import React from "react";
import Modal from "react-modal";
import "./popUp.css";
import { FaTimes } from "react-icons/fa"; 
Modal.setAppElement("#root"); 

const PopUp = ({ card, closeModal }) => {
  return (
    <Modal
      isOpen={!!card}
      onRequestClose={closeModal}
      className="popup-modal"
    >
      <div className="modal-header">
        <h3 className="Skill-title">{card.title}</h3>
        <FaTimes onClick={closeModal} className="close-icon" />
      </div>
      <div className="framework-icons">
        {card.frameworks.map((framework, index) => (
          <span key={index} className="framework-icon">
            {framework}
          </span>
        ))}
      </div>
    </Modal>
  );
};

export default PopUp;
