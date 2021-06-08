import React, {useState} from 'react';

import '../index.scss'
import {
    Button,
    ButtonGroup,
    DropdownButton,
    FormCheck,
    FormFile,
    FormGroup,
    OverlayTrigger, Row,
    Tooltip
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {makeKeyWordBold} from "../utils";
import Feedback from "react-bootstrap/Feedback";

const PICK_ONE = 'PICK_ONE';
const PICK_FEW = 'PICK_FEW';
const COMPARE_FEW = 'COMPARE_FEW';
const WRITE_ESSAY = 'WRITE_ESSAY';
const Question = (
    {
        answers = [],
        hint = '',
        question = '',
        type = ''
    }) => {
    const renderTooltip = (props) => <Tooltip id="button-tooltip" {...props}>{makeKeyWordBold(hint)}</Tooltip>
    const [file, setFile] = useState();
    const [isInValidFile, setIsNotValidFile] = useState(true);
    const [warningMessage, setWarningMessage] = useState('Обов\'язкого треба завантажити файл');
    const validFileTypes = ['image/png', 'image/jpg'];

    const handleDropDownItem = (buttonIndex, itemIndex) => {
        buttonIndex = parseInt(buttonIndex) + 1;
        itemIndex = parseInt(itemIndex) + 1;
    }

    const handleFile = (e) => {
        if (e.target.files.length !== 0) {
            if (e.target.files[0].type === validFileTypes[0] || e.target.files[0].type === validFileTypes[1]) {
                setFile(e.target.files[0].name);
                setIsNotValidFile(false);
            } else {
                setWarningMessage('Завантажувати можна ТIЛЬКИ файли з розширенням .png та .jpg');
                setIsNotValidFile(true)
            }
        }
    }
    return (
        <div id="questionBlock" className="rounded d-inline-flex">
            <div id="examCard" className="card border border-warning">
                <div className="card-header text-white">
                    <div className='text-start'>{makeKeyWordBold(question)}</div>
                    <OverlayTrigger delay={{show: 200, hide: 300}} overlay={renderTooltip} placement="right-start">
                        <Button className="mt-2" variant="success">Пiдказка</Button>
                    </OverlayTrigger>
                </div>
                <div className="card-body mt-5">
                    {answers.map((answer, index) => {
                        switch (type) {
                            case PICK_ONE:
                                return <div key={index} id="answer">
                                    <FormCheck key={index} type='radio'
                                               id={answer.answer}
                                               label={makeKeyWordBold(answer.answer)}
                                               name='answer'
                                    />
                                </div>

                            case PICK_FEW:
                                return <div key={index} id="answer">
                                    <FormCheck key={index} type='checkbox'
                                               id={answer.answer}
                                               label={makeKeyWordBold(answer.answer)}
                                    />
                                </div>
                            case COMPARE_FEW:
                                return <div key={index} className="mt-2">
                                    <DropdownButton key={index} as={ButtonGroup}
                                                    id='dropdown-button-drop-right'
                                                    drop='right'
                                                    variant="secondary"
                                                    size="sm"
                                                    title={answer.left}>
                                        {answers.map((answer, itemIndex) => {
                                            return <DropdownItem key={itemIndex}
                                                                 onSelect={() => handleDropDownItem(index, itemIndex)}
                                                eventKey={itemIndex}>{makeKeyWordBold(answer.right)}
                                            </DropdownItem>
                                        })}
                                    </DropdownButton>
                                </div>
                        }
                    })}
                    {type === WRITE_ESSAY &&
                    <FormGroup as={Row}>
                        <FormFile type="file" custom className="custom-file-label" id="inputGroupFile">
                            <FormFile.Input isInvalid={isInValidFile} onChange={handleFile} />
                            <Feedback type="invalid">{warningMessage}</Feedback>
                        </FormFile>
                    </FormGroup>
                    }
                </div>
            </div>
        </div>
    )
}
export default Question;