import React from "react";
import {Button, Modal} from "react-bootstrap";

const FinishExamModal = (
  {
    show = false,
    onFinish = f => f,
    setShow = f => f
  }) => {
  return (
    <Modal  show={show} onHide={setShow}>
      <Modal.Header style={{background: '#434343'}}>
        <Modal.Title className="text-white">Are you sure to finish the test ?</Modal.Title>
          <br/>
          <div className="justify-content-center">
              <Button variant="danger" onClick={onFinish}>
                  Finish
              </Button>
          </div>
      </Modal.Header>
    </Modal>
  )
}
export default FinishExamModal;