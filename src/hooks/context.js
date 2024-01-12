import { createContext, useState } from "react";


export const context = createContext({
    menuBar: false,
    menuHandler: () => {},
    menuFalseHandler: () => {}
});


const Context = ({children}) => {
    const [menu, setMenu] = useState(false);

    const menuBarHandler = () => {
        setMenu(prevState => !prevState)
    }

    const menuFalseHandler = () => {
        setMenu(false)
    }

    return (
        <context.Provider 
           value={{ menuBar: menu, menuHandler: menuBarHandler,
                menuFalseHandler: menuFalseHandler }}>
            {children}
        </context.Provider>
    )
    
}

export default Context;