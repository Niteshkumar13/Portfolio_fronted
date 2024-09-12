import React, { createContext, useContext, useState } from 'react'
export const CreateThemeContext = createContext(null);
export const useThemeContext = () =>{ return useContext(CreateThemeContext)};

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState({
        background:"#0f0e17",
        text:"#fffffe",
        footer:"#fb923c",
        particles:"rgba(114,114,114,0.2)",
        buttonBorder:"#ff8906",
        highlightedtext:"#f97316"
    })
    return (
        <CreateThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </CreateThemeContext.Provider>
    )
}

export default ThemeContext;