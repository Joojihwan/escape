import React from 'react';
import CardViewContext from "../../context/CardViewContext";

function CardView (props) {
    const data = props.data;
    const cardViewList = data.map((item) => {
        return (
        <CardViewContext className='CardViewContext'
            key={item.no}
            no={item.no}
            title={item.title}
            src={item.src}
            content={item.content}
        />
        );
    })
    return cardViewList;
}

export default CardView;