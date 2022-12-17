import React from 'react';
import SearchBar from '../../components/form/SearchBar';
import CategoryTab from '../../components/ui/CategoryTab';
import Category from '../../data/Category';

function Home() {
    return (
        <div className='home'>
            <SearchBar/>
            <CategoryTab
                data={Category}
            />
        </div>
    );
}

export default Home;