import React from "react";

const QuestionRouter = ({route = f => f}) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button onClick={() => route('prev')} className="page-link">Previous</button>
                </li>
                <li className="page-item">
                    <button onClick={() => route('next')} className="page-link">Next</button>
                </li>
            </ul>
        </nav>
    )
}
export default QuestionRouter;