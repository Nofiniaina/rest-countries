import { useState } from "react";
import searchIconLight from "../assets/search.svg";
import arrowDownLight from "../assets/keyboard_arrow_down.svg";
import searchIconDark from "../assets/search_dark.svg";
import arrowDownDark from "../assets/keyboard_arrow_down_dark.svg";

function SearchBar({ theme }) {

    return (
        <div className="search-bar">
            <Input theme={theme} />
            <Filter theme={theme} />
        </div>
    );
}

function Input({ theme }){
    const searchIcon = theme === "light" ? searchIconLight : searchIconDark;
    return(
        <div className="input">
            <div className="input-wrapper">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder="Search for a country" />
            </div>
        </div>
    );
}

function Filter({ theme }){
    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilter = () => {
        setShowFilter((showFilter) => !showFilter);
    }

    const arrowDown = theme === "light" ? arrowDownLight : arrowDownDark;

    return(
        <div className="filter">
            <div onClick={handleShowFilter} className="filter-btn">Filter by Region <img src={arrowDown} alt="" /></div>
            {
                showFilter && (
                    <div className="filter-content">
                        <p>Africa</p>
                        <p>America</p>
                        <p>Asia</p>
                        <p>Europe</p>
                        <p>Oceania</p>
                    </div>
                )
            }
            
        </div>
    );
}

export default SearchBar;