import React from "react";
import {Button, Modal} from "react-bootstrap";

const FinishExamModal = (
  {
    show = false,
    onFinish = f => f,
    setShow = f => f
  }) => {
  return (
    <Modal show={show} onHide={setShow}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure to finish the test ?</Modal.Title>
      </Modal.Header>
      <Modal.Footer className="justify-content-center">
        <Button variant="danger" onClick={onFinish}>
          Finish
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default FinishExamModal;