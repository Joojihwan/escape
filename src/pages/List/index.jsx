import React from 'react';
import PriceRangeBar from '../../components/ui/PriceRangeBar';
import CardView from '../../components/ui/CardView';
import WhiskeyList from '../../data/Whiskey';
function List() {
    return (
        <div>
            <PriceRangeBar />
            <CardView 
                data={WhiskeyList}
            />
        </div>
    );
}

export default List;