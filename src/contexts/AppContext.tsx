import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export interface IAppContext {
    theme: 'black' | 'white'
    setTheme: Dispatch<SetStateAction<'black' | 'white'>>
}

export const AppContext = createContext<null | IAppContext>(null)
export const AppProvider = AppContext.Provider

export function useAppContext() {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider')
    }

    return context
}
