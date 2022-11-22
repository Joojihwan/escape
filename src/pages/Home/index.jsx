import React, {useState} from 'react';
import Logo from '../../assets/logo.svg';
import SearchBar from '../../components/form/SearchBar';
import CategoryTab from '../../components/ui/CategoryTab';
import Category from '../../data/Category';

function Home() {
    const [tabContext, setTabContext] = useState();
    return (
        <div>
            <img src={Logo} />
            <SearchBar/>
            <CategoryTab
                data={Category}
                selectedTab={0}
                tabContext={tabContext}
                />
        </div>
    );
}

export default Home;