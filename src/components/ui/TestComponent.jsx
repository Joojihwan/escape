import React from "react";
import RangeSlider from "react-range-slider-input";
import 'react-range-slider-input/dist/style.css';

function TestComponent() {
  let min = 0;
  let max = 10000;
  function tmp(){
    console.log("tmptmp");
  }
  return (
    <div>
      <RangeSlider 
        min={min}
        max={max}
        defaultValue={[1000, 7000]}
        onInput={tmp}
        className={"range-slider__thumb"}
      />
    </div>
  );
}

export default TestComponent;