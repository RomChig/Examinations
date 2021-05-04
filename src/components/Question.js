import React from 'react';

import '../index.scss'
import {ButtonGroup, DropdownButton, FormCheck} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

const boldString = (str, substr) => str.replace(substr, '<b>' + substr + '</b>');

const PICK_ONE = 'PICK_ONE';
const PICK_FEW = 'PICK_FEW';
const COMPARE_FEW = 'COMPARE_FEW';
const ENTER_ANSWER = 'ENTER_ANSWER';
const WRITE_ESSAY = 'WRITE_ESSAY';
const Question = (
    {
        answers = [],
        cost = {},
        hint = '',
        question = '',
        type = '',
        route = f => f
    }) => {
    let str = '';
    let time = new Date();
    time.setSeconds(time.getSeconds() + 5400);
    return (
        <div id="questionBlock" className="rounded d-inline-flex">
            <div id="examCard" className="card border border-warning">
                <div className="card-header text-white">
                    <div className='text-start'>{question}</div>
                </div>
                <div className="card-body mt-5" title={hint}>
                    {answers.map((answer, index) => {
                        if (type === COMPARE_FEW) {
                            console.log(answers)
                        }
                        switch (type) {
                            case PICK_ONE:
                                return <div key={index} id="answer">
                                    <FormCheck type='radio'
                                               id={answer.answer}
                                               label={answer.answer}
                                               name='answer'
                                    />
                                </div>

                            case PICK_FEW:
                                return <div key={index} id="answer">
                                    <FormCheck type='checkbox'
                                               id={answer.answer}
                                               label={answer.answer}
                                    />
                                </div>
                            case COMPARE_FEW:
                                return <div className="mt-2">
                                    <DropdownButton as={ButtonGroup} key={index}
                                                    id='dropdown-button-drop-right'
                                                    drop='right'
                                                    variant="secondary"
                                                    size="sm"
                                                    title={answer.left}>
                                        {answers.map((answer, index) => {
                                            return <DropdownItem onSelect={event => console.log(answer.right)}
                                                                 eventKey={index}>{answer.right}</DropdownItem>
                                        })}
                                    </DropdownButton>
                                </div>
                        }
                    })}
                </div>
                {/*{answer.answer.split(' ').forEach(el => {*/}
                {/*    if (el.startsWith('$') && el.endsWith('$')) {*/}
                {/*        {*/}
                {/*          str = boldString(answer.answer, el);*/}
                {/*        }*/}
                {/*    }*/}
                {/*})}*/}
                {/*<div className="card-footer text-muted">*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default Question;