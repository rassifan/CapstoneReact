import React from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [array, setArray] = React.useState([])
    return (
        <Context.Provider value={{array}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}