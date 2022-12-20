import React, {useState} from "react";
import ToggleTextBox from "./ToggleTextBox";
import defaultSrc from '../assets/whiskey.png'
import './CardViewContext.css'

function CardViewContext (props) {
    const title = props.title || "";
    const src = props.src || defaultSrc;
    const content = props.content || "";
    const no = props.no || "";
    const [toggle, setToggle] = useState(false);
    const editable = props.editable || false;
    return (
        <div className="cardview_context">
            <div className="img_area">
                <img src={src} />
            </div>
            <div className="context_area">
                <div className="context_top_area">
                    {title}
                    <button className="like_btn">좋아요버튼</button>
                </div>
                <div className="context_bottom_area">
                    <button onClick={(e) => {
                        setToggle(!toggle);
                    }}>더보기</button>
                    <ToggleTextBox 
                            toggle={toggle}
                            content={content}
                            editable={editable}
                        />
                </div>
            </div>
        </div>
    );
}

export default CardViewContext;