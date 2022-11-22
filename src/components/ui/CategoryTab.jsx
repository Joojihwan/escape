import React, {useState} from "react";
import './CategoryTab.css';

function getCategoryContext(data) {
    return data.map((context, idx) => {
        return (
            <div key={idx}>
                {context.name}
            </div>
        );
    });
}

function CategoryTab (props) {
    const data = props.data;
    const tabs = Object.keys(data);
    const [selectedTab, setSelectedTab] = useState(props.selectedTab);
    const categoryContext = getCategoryContext(data[tabs[selectedTab]]);
    const tabContext = tabs.map((tab, idx) => {
        const className = idx === selectedTab ? "selected" : "not_selected";
        return (
            <li 
                key={idx} 
                className={className} 
                onClick={(target) => {
                    setSelectedTab(idx);
                }}>
                {tab}
            </li>
        );
    });
    return (
        <div>
            <div className="tab_container">
            {tabContext}
            </div>
            <div className="categoryContext_container">
                {categoryContext}
            </div>
        </div>
    )
}

export default CategoryTab;