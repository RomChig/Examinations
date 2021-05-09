import React from "react";
import {NavLink} from "react-router-dom";
import '../index.scss';
import {useSelector} from "react-redux";

const MainPage = () => {
    const exam = useSelector(state => state.main_page.exam);
    return (
        <>
            <div id="greeting_window">
                <div id="card" className="card text-center text-white"
                     style={{width: '25rem', height: '25rem', background: '#434343'}}>
                    <div className="card-header fw-bold">
                        {exam.about.title}
                    </div>
                    <div className="card-body mt-5">
                        <h5 className="card-title">Кiлькiсть питань: {exam.questions.length}</h5>
                        <h5 className="card-title">Час: 90 хв</h5>
                    </div>
                    <div className="card-footer">
                        <NavLink to={"/test"} className="btn btn-outline-dark">Розпочати</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MainPage;