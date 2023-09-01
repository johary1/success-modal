import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";

const MyModal = ({ show, handleClose }) => {
  return (
    <Modal className="modal-container" show={show} onHide={handleClose}>
      <Modal.Body className="modal-title">
        <p>A new employee was successfully added!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-btn" variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
