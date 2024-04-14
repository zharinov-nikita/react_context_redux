import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { IData } from '../types'

export interface IDataContext {
    data: IData
    setData: Dispatch<SetStateAction<IData>>
}

export const DataContext = createContext<null | IDataContext>(null)
export const DataProvider = DataContext.Provider

export function useDataContext() {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider')
    }

    return context
}
