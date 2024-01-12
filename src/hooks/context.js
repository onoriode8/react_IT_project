import { createContext, useState } from "react";


export const context = createContext({
    menuBar: false,
    menuHandler: () => {}
});


const Context = ({children}) => {
    const [menu, setMenu] = useState(false);

    const menuBarHandler = () => {
        setMenu(prevState => !prevState)
    }

    return (
        <context.Provider value={{ menuBar: menu, menuHandler: menuBarHandler }}>
            {children}
        </context.Provider>
    )
    
}

export default Context;