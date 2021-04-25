import {Exam} from './components'
import {Container} from './components'
import MainPage from './pages/MainPage'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setExamToState} from "./index";
import {getUkrainianTest} from "./services";
import Header from "./components/header/Header";

const App = () => {
  const dispatch = useDispatch();
  const [isReceived, setIsReceived] = useState(false);

  useEffect(() => {
    if (!isReceived) {
      getExamsAndRenderMainPage().then(res => setIsReceived(!!res));
    }
  }, [])

  const getExamsAndRenderMainPage = async () => {
    const exams = await getUkrainianTest();
    dispatch(setExamToState(exams));
    return exams;
  }

  return (
    <BrowserRouter>
      <Container>
        <Header isLight={false}/>
        <Switch>
          <Route exact path={'/test'} render={() => <Exam/>}/>
          <Route path={'/'} render={() => <MainPage/>}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
