import React, {useState} from 'react';
import Question from "./Question";
import {useSelector} from "react-redux";
import '../index.scss';
import {QuestionRouter, Time} from "../utils";

const Exam = ({}) => {
    const exam = useSelector(state => state.main_page.exam);
    const [question, setQuestion] = useState({index: 1, question: exam.questions[0]});
    let arr = [];
    for (let i = 1; i <= exam.questions.length; i++) {
        if (i === question.index) {
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
            setQuestion(
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
                    <Question key={question.index}
                              answers={question.question.answers}
                              cost={question.question.cost}
                              hint={question.question.hint}
                              question={question.question.question}
                              type={question.question.type}
                    />
                }
            <Time expiryTimestamp={getExamTime}/>
            <div id="submitButton" className="d-grid gap-2 col-3 float-end me-3 mt-2">
                <button className="btn btn-warning" type="submit">Завершити тест</button>
            </div>
            <QuestionRouter route={goTo}/>
        </div>
    )
}
export default Exam;
