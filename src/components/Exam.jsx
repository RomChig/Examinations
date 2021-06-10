import React, {useState} from 'react';
import Question from "./Question";
import {useSelector} from "react-redux";
import '../index.scss';
import {PATH_TO_RESULT_PAGE, QuestionRouter, Timer} from "../utils";
import {useHistory} from "react-router-dom";

const Exam = ({}) => {
    const exam = useSelector(state => state.main_page.exam);
    const [currentQuestion, setCurrentQuestion] = useState({index: 1, question: exam.questions[0]});
    const history = useHistory();
    let arr = [];
    for (let i = 1; i <= exam.questions.length; i++) {
        if (i === currentQuestion.index) {
            arr.push(<div key={i} className="flex-column p-2">
                <button className={'btn btn-warning'} type="button" value={i}
                        onClick={(e) => handleClick(e)}>{i}</button>
            </div>);
        } else {
            arr.push(<div key={i} className="flex-column p-2">
                <button className="btn text-white" style={{background: '#434343'}} type="button" value={i}
                        onClick={(e) => handleClick(e)}>{i}</button>
            </div>);
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        const questionIndexToFollow = parseInt(e.target.value);
        if (questionIndexToFollow !== currentQuestion.index) {
            setCurrentQuestion(
                {
                    index: questionIndexToFollow,
                    question: exam.questions[e.target.value - 1]
                }
            );
        }
    }

    const goTo = (route = 'next') => {
        let neededIndex = route === 'next' ? currentQuestion.index + 1 : currentQuestion.index - 1;
        if (neededIndex >= 1 && neededIndex <= 23) {
            setCurrentQuestion(
                {
                    index: neededIndex,
                    question: exam.questions[neededIndex - 1]
                }
            )
        }
    }

    const getExamTime = () => {
        let time = new Date();
        time.setSeconds(time.getSeconds() + 5400);
        return time;
    }

    return (
        <div id='exam'>
            <div className="d-flex flex-wrap text-white mt-5">
                {arr}
            </div>
            {
                <Question key={currentQuestion.index}
                          answers={currentQuestion.question.answers}
                          cost={currentQuestion.question.cost}
                          hint={currentQuestion.question.hint}
                          question={currentQuestion.question.question}
                          type={currentQuestion.question.type}
                />
            }
            <Timer expiryTimestamp={getExamTime}/>
            <div id="submitButton" className="d-grid gap-2 col-3 float-end me-3 mt-2">
                <button className="btn btn-warning"
                        type="submit" onClick={() => history.push(PATH_TO_RESULT_PAGE)}>Завершити тест</button>
            </div>
            <QuestionRouter route={goTo}/>
        </div>
    )
}
export default Exam;
