import React from "react";
import textReadLocal from './textToProcess.js';

function TxtYan(){

    const objectSumArray = {Sum: 0}
    const masSummArry = [];
    const objectAlf = {
        "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9,
        "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, 
        "R": 18, "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26
      };

    const arrayText = textReadLocal();
    arrayText.sort();
    
     for (let i = 0; i < arrayText.length; i++){
        let workStrArray = arrayText[i];
        let objectSummStr = {
            summStr: 0,
            summStrGlo: 0,
            positionArray: 0
        };
        
        for (let j = 0; j < workStrArray.length; j++){

            objectSummStr.summStr += objectAlf[workStrArray[j]];
            objectSummStr.summStrGlo = objectSummStr.summStr * (i+1);
            objectSummStr.positionArray = (i+1);
            objectSumArray.Sum += objectSummStr.summStrGlo;

        }        
        masSummArry.push(objectSummStr);

     }
     
    console.log(arrayText);
    console.log(masSummArry);
    console.log(objectSumArray.Sum);
    
    return(
        <div>
            <h1>Привет</h1>
        </div>
    );
}

export default TxtYan;