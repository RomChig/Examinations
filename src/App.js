import {Exam} from './components'
import {Container} from './components'
import MainPage from './pages/MainPage'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {setExamToState} from "./index";
import {getUkrainianTest, loadFromLocalStorage} from "./services";
import {Header} from "./components/header";
import {shuffle} from "./utils";

const App = () => {
  const dispatch = useDispatch();
  const isEmptyStorage = (exams) => Object.keys(exams.main_page.exam).length === 0;
  const loadExam = () => {
    const exams = loadFromLocalStorage();
    if (!exams || isEmptyStorage(exams)) {
      getUkrainianTest().then(exam => {
        shuffle(exam.questions);
        exam.questions.forEach(question => shuffle(question.answers));
        dispatch(setExamToState(exam))
      });
    }
  }

  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <Switch>
          <Route exact path={'/test'} render={() => <Exam/>}/>
          <Route path={'/'} render={() => {
            loadExam();
            return <MainPage/>
          }}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
