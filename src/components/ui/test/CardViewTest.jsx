import React from "react";
const title = props.title || "";
    const src = props.src || defaultSrc;
    const content = props.content || "";
    const no = props.no || "";
    const [toggle, setToggle] = useState(false);
    const editable = props.editable || false;
function getData(){
    data = [];

    for(let i = 0; i < 10; i++) {
        data.push({
            title: 'title' + i,
            src : '',
            content: 'content' + i,
            no: i,
            toggle: false,
            editable: false,
        });
    }
    return data
}