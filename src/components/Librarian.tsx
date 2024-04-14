import { useDataContext } from '../contexts/DataContext'

export function Librarian() {
    const { data } = useDataContext()

    return (
        <div className='bg-slate-400 w-80 rounded p-2 flex flex-col gap-2'>
            <h1 className='font-bold'>Библиотекарь</h1>
            <p>
                Сейчас читают{' '}
                <span className='text-red-600'>
                    {data.librarian.books.length}
                </span>{' '}
                книги
            </p>
            {
                <ul className='flex gap-2 flex-col'>
                    {data.librarian.books.map(
                        ({
                            author,
                            title,
                            userID,
                            ID,
                            shelfID,
                            wardrobesID,
                        }) => {
                            return (
                                <li
                                    className='bg-slate-200 p-2 rounded'
                                    key={ID}
                                >
                                    <div>
                                        Автор:{' '}
                                        <span className='font-bold'>
                                            {author}
                                        </span>
                                    </div>
                                    <div>
                                        Книга:{' '}
                                        <span className='font-bold'>
                                            {title}
                                        </span>
                                    </div>
                                    <div>
                                        Шкаф:{' '}
                                        <span className='font-bold'>
                                            {wardrobesID}
                                        </span>
                                    </div>
                                    <div>
                                        Полка:{' '}
                                        <span className='font-bold'>
                                            {shelfID}
                                        </span>
                                    </div>
                                    <div>
                                        Читает сейчас:{' '}
                                        <span className='font-bold'>
                                            Пользователь {userID}
                                        </span>
                                    </div>
                                </li>
                            )
                        }
                    )}
                </ul>
            }
        </div>
    )
}
