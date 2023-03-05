import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import RangeSlider from "react-range-slider-input";
import 'react-range-slider-input/dist/style.css';

function SearchOption () {
    const min = 0;
    const max = 10000;
    const [valueLeft, setValueLeft] = React.useState(min);
    const [valueRight, setValueRight] = React.useState(max);
    function setRangeSliderValue(){
        const left = document.getElementById("RangeSlider").children[0];
        const right = document.getElementById("RangeSlider").children[1];
        left.value = valueLeft;
        right.value = valueRight;
    }
    function tmp(e){
        setValueLeft(e[0]);
        setValueRight(e[1]);
        document.getElementById("input_valueLeft").value = valueLeft;
        document.getElementById("input_valueRight").value = valueRight;
    }
    return (
      <div className="search_option">
        <RangeSlider 
            id="RangeSlider"
            min={min}
            max={max}
            defaultValue={[valueLeft, valueRight]}
            onInput={tmp}
            className={"range-slider__thumb"}
        />
        <div>
            <input 
                id="input_valueLeft"
                onChange={e => {
                    let value = e.target.value
                    if (value >= 10000){
                        alert(value + " is too large\n 10000미만으로 넣으렴")
                        setValueLeft(2000)
                        e.target.value=2000
                    }
                    else {
                        setValueLeft(e.target.value);
                    }
                    setRangeSliderValue();
                }} 
                defaultValue={min}
            />
            <input 
                id="input_valueRight"
                onChange={e => {
                    let value = e.target.value
                    if (value < 100){
                        alert(value + " is too small\n 100이상으로 넣으렴")
                        setValueRight(2000)
                        e.target.value=2000
                    }
                    else {
                        setValueRight(e.target.value);
                    }
                    setRangeSliderValue();
                }} 
                defaultValue={max}
            />
        </div>
      </div>
    );
}

export default SearchOption;
