import { useDataContext } from '../contexts/DataContext'
import { IBook, ILibrarian, IUser } from '../types'
import { LIMIT } from '../constants'
import { Book } from './Book'

export function useBooks() {
    const { data, setData } = useDataContext()

    function takeBook(book: IBook) {
        const limit = data.currentUser.books.length < LIMIT
        const isTook = data.currentUser.books.find((b) => b.ID === book.ID)

        if (limit && !isTook) {
            const updatedBook: IBook = { ...book, userID: data.currentUser.ID }

            const updatedCurrentUser: IUser = {
                ...data.currentUser,
                books: [...data.currentUser.books, updatedBook],
            }

            const updatedLibrarian: ILibrarian = {
                ...data.librarian,
                books: [...data.librarian.books, updatedBook],
            }

            setData({
                ...data,
                currentUser: updatedCurrentUser,
                librarian: updatedLibrarian,
            })
        }
    }

    return { data, takeBook }
}

export function Books({ books }: { books: IBook[] }) {
    const { takeBook } = useBooks()

    return (
        <div className='flex flex-col gap-2'>
            {books.map((book) => {
                return <Book book={book} takeBook={takeBook} />
            })}
        </div>
    )
}
