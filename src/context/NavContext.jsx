import React, {createContext, useState} from 'react'

export const NavContext = createContext()

export const NavProvider = props=> {
    const [sideBar, setSideBar] = useState(true)

    return(
        <NavContext.Provider value={[sideBar, setSideBar]}>
            {props.children}
        </NavContext.Provider>
    )
}


