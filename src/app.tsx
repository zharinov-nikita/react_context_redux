import { useEffect, useState } from 'react'
import { IData } from './types'
import { DataProvider } from './contexts/DataContext'
import { User } from './components/User'
import { Librarian } from './components/Librarian'
import { Library } from './components/Library'
import { generateWardrobeData, mockData } from './mock'
import { AppProvider } from './contexts/AppContext'

console.log(generateWardrobeData())

export function App() {
    const [theme, setTheme] = useState<'black' | 'white'>('black')
    const [data, setData] = useState<IData>(mockData)

    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--primary-color', theme)
    }, [theme])

    return (
        <div className='p-8'>
            <DataProvider value={{ data, setData }}>
                <AppProvider value={{ theme, setTheme }}>
                    <div className='flex flex-col gap-8'>
                        <User />
                        <Librarian />
                    </div>
                </AppProvider>
                <Library />
            </DataProvider>
        </div>
    )
}
