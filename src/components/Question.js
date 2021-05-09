import React from 'react';

import '../index.scss'
import {Button, ButtonGroup, DropdownButton, FormCheck, OverlayTrigger, Tooltip} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {makeKeyWordBold} from "../utils";

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
    let time = new Date();
    time.setSeconds(time.getSeconds() + 5400);
    const title = makeKeyWordBold(hint);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {makeKeyWordBold(hint)}
        </Tooltip>
    );
    return (
        <div id="questionBlock" className="rounded d-inline-flex">
            <div id="examCard" className="card border border-warning">
                <div className="card-header text-white">
                    <div className='text-start'>{makeKeyWordBold(question)}</div>
                   <OverlayTrigger delay={{ show: 200, hide: 300 }} overlay={renderTooltip} placement="right-start">
                       <Button className="mt-2" variant="success">Пiдказка</Button>
                   </OverlayTrigger>
                </div>
                <div className="card-body mt-5">
                    {answers.map((answer, index) => {
                        if (type === COMPARE_FEW) {
                            console.log(answers)
                        }
                        switch (type) {
                            case PICK_ONE:
                                return <div key={index} id="answer">
                                    <FormCheck type='radio'
                                               id={answer.answer}
                                               label={makeKeyWordBold(answer.answer)}
                                               name='answer'
                                    />
                                </div>

                            case PICK_FEW:
                                return <div key={index} id="answer">
                                    <FormCheck type='checkbox'
                                               id={answer.answer}
                                               label={makeKeyWordBold(answer.answer)}
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
                                                                 eventKey={index}>{makeKeyWordBold(answer.right)}</DropdownItem>
                                        })}
                                    </DropdownButton>
                                </div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
export default Question;