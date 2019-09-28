import React from 'react';

function SearchPairs(){
    
    const arrSort = [1, 2, 6, 5, 3, 4, 7, 8, 2, 3];
    const intSort = 5;
    const arrReturn = [];

    for (let i = 0; i < arrSort.length; i++){
        let nambPr = arrSort[i]; 
        
        let namberRz = intSort - nambPr;
        
        if(namberRz <= 0){
            continue;
        }

        if (arrSort.indexOf(namberRz) != -1){           
                
                let valueZn = (nambPr > namberRz)? `${String(namberRz)},${String(nambPr)}` : `${String(nambPr)},${String(namberRz)}`; 

                if (arrReturn.indexOf(valueZn) == -1){
                    arrReturn.push(valueZn);
                }                                      
        }

    }
    return (
        <div>
            <h1>{arrReturn.join("|")}</h1>
        </div>
    );
}

export default SearchPairs;