import { useEffect, useState } from 'react'
import { useDataContext } from '../contexts/DataContext'
import { IBook, ILibrarian, IUser } from '../types'
import { LIMIT } from '../constants'
import { useAppContext } from '../contexts/AppContext'

function useUser() {
    const [isLimit, setIsLimit] = useState(true)
    const { data, setData } = useDataContext()

    function returnBook(paramBook: IBook) {
        const updatedCurrentUser: IUser = {
            ...data.currentUser,
            books: [
                ...data.currentUser.books.filter(
                    (book) => book.ID !== paramBook.ID
                ),
            ],
        }

        const updatedLibrarian: ILibrarian = {
            ...data.librarian,
            books: [
                ...data.librarian.books.filter(
                    (book) => book.ID !== paramBook.ID
                ),
            ],
        }

        setData({
            ...data,
            currentUser: updatedCurrentUser,
            librarian: updatedLibrarian,
        })
    }

    useEffect(() => {
        setIsLimit(data.currentUser.books.length === LIMIT)
    }, [data.currentUser.books])

    return { returnBook, isLimit, data }
}

export function User() {
    const { theme, setTheme } = useAppContext()
    const { data, isLimit, returnBook } = useUser()

    const onSetTheme = () =>
        setTheme((t) => (t === 'white' ? 'black' : 'white'))

    return (
        <div className='bg-slate-400 w-80 rounded p-2 flex flex-col gap-2'>
            <button className='bg-black text-white p-2' onClick={onSetTheme}>
                {theme}
            </button>
            <h1 className='font-bold'>
                Текущий посетитель: {data.currentUser.ID}
            </h1>
            <p>Список взятых книг</p>
            {data.currentUser.books.length > 0 ? (
                <ul className='flex gap-2 flex-col'>
                    {data.currentUser.books.map((book) => (
                        <li className='bg-slate-200 p-2 rounded' key={book.ID}>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col gap-3'>
                                    <span>
                                        {book.author} - {book.title}
                                    </span>
                                    <span className='text-sm font-medium'>
                                        шкаф {book.wardrobesID} · полка{' '}
                                        {book.shelfID}
                                    </span>
                                </div>
                                <button
                                    className='text-sm inline-flex items-center justify-center p-2 bg-red-500'
                                    onClick={() => returnBook(book)}
                                >
                                    Вернуть
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                'Нет книг'
            )}
            {isLimit && (
                <p className='text-red-700'>Максимум можно {LIMIT} книг</p>
            )}
        </div>
    )
}
