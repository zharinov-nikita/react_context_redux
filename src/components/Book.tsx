import { IBook } from '../types'

export function Book({
    book,
    takeBook,
}: {
    book: IBook
    takeBook: (book: IBook) => void
}) {
    return (
        <div
            key={book.ID}
            className={`flex flex-col gap-2  rounded w-60 p-4 bg-slate-700`}
        >
            <div>{book.title}</div>
            <div>{book.author}</div>
            {book.userID !== null && (
                <div className='bg-red-400 p-2 rounded'>
                    Читает сейчас:{' '}
                    <span className='font-bold'>Пользователь {book.ID}</span>
                </div>
            )}
            {book.userID === null && (
                <button
                    className='p-2 bg-black text-white'
                    onClick={() => takeBook(book)}
                >
                    Взять книгу
                </button>
            )}
        </div>
    )
}
