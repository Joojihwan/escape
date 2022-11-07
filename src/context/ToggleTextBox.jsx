import React from "react";

function ToggleTextBox(props){
    const toggle = props.toggle || false;
    const content = props.content || "";
    const editable = props.editable || false;
    if(toggle){
        if (editable){
            return (
                <textarea 
                    value={content} 
                />
            );
        }else{
            return (
                <textarea 
                    readOnly
                    value={content} 
                />
            );
        }
    }else {
        return (
            <label>{content}</label>
        );
    }
}

export default ToggleTextBox;