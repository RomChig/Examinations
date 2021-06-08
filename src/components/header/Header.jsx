import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {FinishExamModal} from "./index";
import '../../index.scss';

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

  const alertUserToLoseDataWhenReloadPage = () => {
    const alertUser = (e) => {
      e.preventDefault();
      e.returnValue = "";
    }
    window.addEventListener("beforeunload", alertUser);
    return () => window.removeEventListener("beforeunload", alertUser);
  };

  useEffect(() => {
      alertUserToLoseDataWhenReloadPage();
  }, []);

  return (
    <header className="header big-container" id="top">
      <div className="header__container">
          <img src="/header_logo.jpg"
               className="header_img"
               alt="logo" variant="primary"
               onClick={handleShow}
               width="209" height="50"/>
      </div>
      <FinishExamModal show={show} onFinish={handleClose} setShow={setShow}/>
    </header>
  );
};

export default Header;