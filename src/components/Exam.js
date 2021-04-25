import React, {useState} from 'react';
import Question from "./Question";
import {useSelector} from "react-redux";
import '../index.scss';
import {Button} from 'react-bootstrap'

const PICK_ONE = 'PICK_ONE';
const PICK_FEW = 'PICK_FEW';
const COMPARE_FEW = 'COMPARE_FEW';
const ENTER_ANSWER = 'ENTER_ANSWER';
const WRITE_ESSAY = 'WRITE_ESSAY';

const Exam = ({}) => {
  const exam = useSelector(state => state.main_page.exam);
  const [question, setQuestion] = useState({index: 1, question: exam.questions[0]});
  let arr = []
  for (let i = 1; i <= exam.questions.length; i++) {
    if (i === question.index) {
      arr.push(<div key={i} className="flex-column p-2">
        <button className={'btn btn-warning'} type="button" value={i}
                onClick={(e) => handleClick(e)}>{i}</button>
      </div>);
    } else {
      arr.push(<div key={i} className="flex-column p-2">
        <button className={'btn btn-info'} type="button" value={i}
                onClick={(e) => handleClick(e)}>{i}</button>
      </div>);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    setQuestion(
      {
        index: parseInt(e.target.value),
        question: exam.questions[e.target.value - 1]
      }
    );
  }

  const goTo = (route = 'next') => {
    let neededIndex = route === 'next' ? question.index + 1 : question.index - 1;
    if (neededIndex >= 1 && neededIndex <= 23) {
      // setQuestion(
      //   {
      //     index: neededIndex,
      //     question: exam.questions[neededIndex - 1]
      //   }
      // )
    }
  }

  return (
    <>
      <div className="d-flex flex-wrap text-white mt-5">
        {arr}
      </div>
      {
        <Question key={question.index}
                  answers={question.question.answers}
                  cost={question.question.cost}
                  hint={question.question.hint}
                  question={question.question.question}
                  type={question.question.type}
                  route={goTo}
        />
      }
    </>
  )
}
export default Exam;
