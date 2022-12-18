import React from 'react';
import './Search.css';
import SearchBar from '../components/form/SearchBar';
import SearchOption from '../components/ui/SearchOption';
import CardViewList from '../components/ui/CardView';
import Footer from '../components/ui/Footer';
import DummyData from '../data/Whiskey';

function Search() {
    const data = DummyData;
    return (
        <div className='search'>
            <div className='logo'>Slainte</div>
            <SearchBar />
            <SearchOption />
            <CardViewList 
                data={data}
            />
            <Footer/>
        </div>
    );
}

export default Search;