import { IShelf } from '../types'
import { Books } from './Books'

export function Shelves({ shelves }: { shelves: IShelf[] }) {
    return (
        <>
            {shelves.map((shelf) => (
                <div className='flex flex-col gap-2' key={shelf.ID}>
                    <h2>Полка - {shelf.ID}</h2>
                    <Books books={shelf.books} />
                </div>
            ))}
        </>
    )
}
