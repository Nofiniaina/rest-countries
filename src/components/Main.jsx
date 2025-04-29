import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

function Main(){
    const [theme, setTheme] = useState('light');

      useEffect(() => {
        document.documentElement.className = theme;
      }, [theme]);

      function toggleDarkMode() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      }

    return (<div>
        <Header onThemeChange={toggleDarkMode} />
        <SearchBar theme={theme} />
    </div>
        
    );
}

export default Main;