import React from "react";

function Cards(props) {
    return (
        <>
           

                <div className="cards">

                    <div className="card">
                        <img src={props.imgsrc} alt='mypic' className="imgs" />
                        <div className="card-info">
                            <span className="card-category" >{props.category}</span>
                            <h2 className="title">{props.title}</h2>
                            <a href={props.link} alt="series link">
                                <button className="btn">Click</button>
                            </a>
                        </div>

                    </div>
                </div>
            
        </>
    )
}
export default Cards;