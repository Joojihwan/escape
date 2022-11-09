import React, {useState} from "react";
import CardView from "./CardView";

function TestComponent(props) {
    const [data, setData] = useState([]);
    return (
        <div>
            <button onClick={ () => {
                let no = data.length;
                let title = 'title' + no;
                let content = "content" + no;
                setData([...data, {
                    no,
                    title,
                    content
                }]);
            }   
            }>Add CardView</button>
            <CardView data={data} />
        </div>
    );
}

export default TestComponent;