import React, {useState} from "react";
import ToggleTextBox from "./ToggleTextBox";

const defaultSrc = '../assets/logo.svg';

function CardViewContext (props) {
    const title = props.title || "";
    const src = props.src || defaultSrc;
    const content = props.content || "";
    const no = props.no || "";
    const [toggle, setToggle] = useState(false);
    return (
        <div className="CardViewContext">
            <p><label>{no}</label></p>
            <p><label>{title}</label></p>
            <p><img src={src} /></p>
            <p><button onClick={(e) => {
                setToggle(!toggle);
            }}>더보기</button></p>
            <p><ToggleTextBox 
                    toggle={toggle}
                    content={content}
                /></p>
        </div>
    );
}

export default CardViewContext;