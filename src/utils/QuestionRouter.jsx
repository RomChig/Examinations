import React from "react";

const QuestionRouter = ({route = f => f}) => {
    const warningStyle = 'btn btn-warning';
    return (
        <nav className="mt-2 m-2" aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button onClick={() => route('prev')} className={warningStyle}>Попереднє</button>
                </li>
                <li className="page-item">
                    <button onClick={() => route('next')} className={warningStyle}>Наступне</button>
                </li>
            </ul>
        </nav>
    )
}
export default QuestionRouter;