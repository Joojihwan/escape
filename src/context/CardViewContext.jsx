import React from "react";

const defaultSrc = '../assets/logo.svg';

function CardViewContext (props) {
    const title = props.title || "";
    const src = props.src || defaultSrc;
    const content = props.content || "";
    const no = props.no || "";
    return (
        <div className="CardViewContext">
            <p><label>{no}</label></p>
            <p><label>{title}</label></p>
            <p><img src={src} /></p>
            <p><label>{content}</label></p>
        </div>
    );
}

export default CardViewContext;