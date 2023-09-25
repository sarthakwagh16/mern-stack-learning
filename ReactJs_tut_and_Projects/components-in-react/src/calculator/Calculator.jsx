import React from 'react';
import Sum from './Sum'
import Sub from './Sub';
import Div from './Div';
import Multi from './Multi';

function Calculator(){
    return(
        <>
            <ol>
                <h1>Sum is {Sum(2,3)}</h1>
                <h1>Substraction is {Sub(2,3)}</h1>
                <h1>Multiplication is {Multi(2,3)}</h1>
                <h1>Division is {Div(2,3)}</h1>
            </ol>
        </>
    )
}
export default Calculator;