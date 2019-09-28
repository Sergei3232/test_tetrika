import React from "react";
import textReadLocal from './textToProcess.js';

function TxtYan(){
    
    const arrayText = textReadLocal();
    const arraySort = arrayText.sort();

    return(
        <div>
            <h1>{arrayText}</h1>
        </div>
    );
}

export default TxtYan;