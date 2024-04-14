type ID = string

export interface IData {
    currentUser: IUser
    users: IUser[]
    library: ILibrary
    librarian: ILibrarian
}

export interface ILibrary {
    wardrobes: IWardrobe[]
}

export interface IWardrobe {
    ID: ID
    shelves: IShelf[]
}

export interface IShelf {
    ID: ID
    wardrobesID: ID
    books: IBook[]
}

export interface IBook {
    ID: ID
    title: string
    author: string
    wardrobesID: ID
    shelfID: ID
    userID: ID | null
}

export interface IUser {
    ID: ID
    name: string
    books: IBook[]
}

export type ILibrarian = Pick<IUser, 'books'>
