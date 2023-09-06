import React from 'react';

function Greet(props){
    return(
        <h2>Hello, {props.name} </h2>
    )
}
export default Greet;

export function Learn(props){
    return(
        <h2>I have started learning {props.lang} from {props.channel} YouTube channel</h2>
    )
}

export const Feel=(props)=>{
    return <h2>I am {props.feel} the entire process</h2>
}