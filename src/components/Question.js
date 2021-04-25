import React from 'react';

import '../index.scss'
import {NavLink} from "react-router-dom";

const boldString = (str, substr) => str.replace(substr, '<b>' + substr + '</b>');
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

  return (
    <div id="questionBlock" className="rounded">
      <div id="examCard" className="card">
        <div className="card-header fw-bold border-0">
          <div className='fw-bold text-info text-center'>{question}</div>
        </div>
        <div className="card-body mt-5">
          {answers.map((answer, index) =>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <div key={index} id="answer">
                {answer.answer}
              </div>
            </div>
          )}
        </div>
        <label className="form-check-label text-white" htmlFor="defaultCheck1">
          {/*{answer.answer.split(' ').forEach(el => {*/}
          {/*    if (el.startsWith('$') && el.endsWith('$')) {*/}
          {/*        {*/}
          {/*          str = boldString(answer.answer, el);*/}
          {/*        }*/}
          {/*    }*/}
          {/*})}*/}
        </label>
        <div className="card-footer text-muted">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button onClick={route('prev')} className="page-link">Previous</button>
              </li>
              <li className="page-item">
                <button onClick={route('next')} className="page-link">Next</button>
              </li>
            </ul>
          </nav>
          <h1 className="text-black-50">Hello
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Question;