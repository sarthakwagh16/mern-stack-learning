import React from "react";


function Cards(props) {
    return (

        <>
               
         
                <div className="main-cards">


                    <div className="cards">
                        <img src={props.imgsrc} alt="pic" className="card-img" />

                        <h1>{props.title}</h1>
                        <p>{props.info}</p>

                    </div>
                </div>
            
        </>


    )
}
export default Cards;