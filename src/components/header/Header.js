import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import FinishExamModal from './FinishExamModal';

const Header = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.push('/');
  }

  const handleShow = () => {
    if (window.location.pathname !== '/') {
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  return (
    <header className="header big-container" id="top">
      <div className="header__container">
        <img src="/download.jpg" alt="logo" variant="primary" onClick={handleShow}/>
      </div>
      <FinishExamModal show={show} onFinish={handleClose} setShow={setShow}/>
    </header>
  );
};

export default Header;