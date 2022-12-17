import React from 'react';
import MultiRangeSlider from '../multiRangeSlider/MultiRangeSlider';

function GearSlider () {
    const [value, setValue] = React.useState([10, 50]);
    return (
        <MultiRangeSlider
          min={value[0]}
          max={value[1]}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      );
}

export default GearSlider;
