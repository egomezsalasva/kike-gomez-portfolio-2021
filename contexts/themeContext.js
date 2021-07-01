
import React, { createContext, useContext, useState } from 'react'


const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    const [themeMode, setThemeMode] = useState({mode: "light"})
    const [themeColorToggle, setThemeColorToggle] = useState(false)

    const toggleThemeHandler = () => {
        if(themeColorToggle === false) {
            setThemeMode({mode: "dark"})
        } else {
            setThemeMode({mode: "light"})
        }
        setThemeColorToggle(!themeColorToggle)
    }


    return (
        <ThemeContext.Provider value={{themeMode, toggleThemeHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}

//export const ThemeCtxConsumer = ThemeContext.Consumer

export function useThemeContext() {
    return useContext(ThemeContext);
}

