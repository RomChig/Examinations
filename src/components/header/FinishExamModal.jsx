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
        <Modal.Title className="text-white">Ви впевнені, що хочете завершити тест?</Modal.Title>
          <br/>
          <div className="justify-content-center">
              <Button variant="danger" onClick={onFinish}>
                  Завершити
              </Button>
          </div>
      </Modal.Header>
    </Modal>
  )
}
export default FinishExamModal;