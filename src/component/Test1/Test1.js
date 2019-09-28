import React from 'react';

function SearchPairs(){
    
    const arrSort = [1, 2, 6, 5, 3, 4, 7, 8];
    const intSort = 5;
    const arrReturn = [];

    for (let i = 0; i < arrSort.length; i++){
        let nambPr = arrSort[i]; 
        
        if (nambPr>=intSort){
            continue;
        }
        else{

            for (let j = (i+1); j <= arrSort.length-1; j++){
                
                let sumNamb = (nambPr + arrSort[j]);
                
                if (sumNamb==intSort) {
                    
                    let valueZn = (nambPr > arrSort[j])? `${String(arrSort[j])},${String(nambPr)}` : `${String(nambPr)},${String(arrSort[j])}`; 
                    // console.log(valueZn);

                    if (arrReturn.indexOf(valueZn) == -1){
                        arrReturn.push(valueZn);
                    }
                    // if (nambPr > arrSort[j]){                            
                    //     let valueZn = arrReturn.push(`${String(arrSort[j])},${String(nambPr)}`);
                    // }
                    // else{
                    //     arrReturn.push(`${String(nambPr)},${String(arrSort[j])}`); 
                    // }
                                
                }
                // Проверяем уникальность записи
                
            }
        }

    }
    return (
        <div>
            <h1>{arrReturn}</h1>
        </div>
    );
}

export default SearchPairs;