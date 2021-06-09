import React from "react";

export const ResultPage = () => {
    return (
            <div id="greeting_window">
                <div id="card" className="card text-center text-white">
                    <div className="card-header fw-bold">
                        <h5 className="card-title">Дякуємо за успішне пройдення тесту</h5>
                    </div>
                    <div className="card-body mt-5">
                        З вами зв'яжется спеціаліст та оголосить результати
                        <br/>
                        <br/>
                        <div>
                            <img src="/smile.png"
                                 alt="smile" variant=""
                                 width="200" height="200"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}