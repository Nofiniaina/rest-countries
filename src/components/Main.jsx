import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";

function Main(){
    const [theme, setTheme] = useState('dark');

      useEffect(() => {
        document.documentElement.className = theme;
      }, [theme]);

      function toggleDarkMode() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      }

    return (<div>
        <Header onThemeChange={toggleDarkMode} />
        <SearchBar theme={theme} />
        <CountriesList />
    </div>
        
    );
}

export default Main;