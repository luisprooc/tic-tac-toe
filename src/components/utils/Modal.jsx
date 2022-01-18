import React from "react";
import { Modal, ModalBody } from "reactstrap";

const WinnerModal = ({ winner, show }) => {
  return (
    <Modal
      centered
      fade={true}
      fullscreen="sm"
      size="sm"
      isOpen={show}
      zIndex={1050}
    >
      <ModalBody><h2 className="text-center">{winner}</h2></ModalBody>
    </Modal>

  );
};

export default WinnerModal;
