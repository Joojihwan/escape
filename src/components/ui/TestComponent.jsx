import React from "react";
import { getCookie } from '../../hooks/Cookie';

function TestComponent(props) {
    console.log(props);
    
    return (
        <div>
            <button onClick={ () => {
                    console.log(getCookie());
                
                }
            }>Get Cookie Button</button>
        </div>
    );
}

export default TestComponent;