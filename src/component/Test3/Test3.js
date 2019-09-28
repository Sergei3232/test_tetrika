import React from 'react';
// import "./Test3.css";

function ColorRoot() {

    const styleRoot = {
        "background-color": 'red',
        width: `600px`,
        height: `400px`
    }
    const styleid1 = {
        "background-color": 'lightblue',
        width: `300px`,
        height: `50px`
    }
    const styleid2 = {
        "background-color": 'green',
        width: `600px`,
        height: `300px`
    }
    const styleid3 = {
        "background-color": 'yellow',
        width: `600px`,
        height: `200px`
    }


    function commentColorRoot(e) {       
        console.log(e.currentTarget.style.backgroundColor);
    }

    function commentColorid1(e) {
        e.stopPropagation();
        console.log(e.currentTarget.style.backgroundColor);
    }

    function commentColorid2(e) {
        e.stopPropagation();
        console.log(e.currentTarget.style.backgroundColor);
    }

    function commentColorid3(e) {
        e.stopPropagation();
        console.log(e.currentTarget.style.backgroundColor);
    }

    return (
        <div id="root" style={styleRoot} onClick={commentColorRoot} >
            root
             <span id="id1" style={styleid1} onClick={commentColorid1}> id1</span>
            <div id="id2" style={styleid2} onClick={commentColorid2}>
                id2
                <div id="id3" style={styleid3} onClick={commentColorid3}> id3</div>
            </div>
        </div>
    );

}
export default ColorRoot;