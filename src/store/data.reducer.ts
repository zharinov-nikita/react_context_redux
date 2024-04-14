import { LIMIT } from '../constants'
import { mockData } from '../mock'
import { IBook, IData, ILibrarian, IUser } from '../types'
import { ActionData, DataActionType } from './data.action'

type InitialState = IData

const initialState: InitialState = { ...mockData }

export const dataReducer = (
    state: InitialState,
    action: ActionData
): InitialState => {
    switch (action.type) {
        case DataActionType.TAKE_BOOK:
            const limit = state.currentUser.books.length < LIMIT
            const isTook = state.currentUser.books.find(
                (b) => b.ID === action.payload.ID
            )

            if (limit && !isTook) {
                const updatedBook: IBook = {
                    ...action.payload,
                    userID: state.currentUser.ID,
                }

                const updatedCurrentUser: IUser = {
                    ...state.currentUser,
                    books: [...state.currentUser.books, updatedBook],
                }

                const updatedLibrarian: ILibrarian = {
                    ...state.librarian,
                    books: [...state.librarian.books, updatedBook],
                }

                return {
                    ...state,
                    currentUser: updatedCurrentUser,
                    librarian: updatedLibrarian,
                }
            }

            return { ...state }

        case DataActionType.RETURN_BOOK:
            const updatedCurrentUser: IUser = {
                ...state.currentUser,
                books: [
                    ...state.currentUser.books.filter(
                        (book) => book.ID !== action.payload.ID
                    ),
                ],
            }

            const updatedLibrarian: ILibrarian = {
                ...state.librarian,
                books: [
                    ...state.librarian.books.filter(
                        (book) => book.ID !== action.payload.ID
                    ),
                ],
            }

            return {
                ...state,
                currentUser: updatedCurrentUser,
                librarian: updatedLibrarian,
            }

        case DataActionType.SET_DATA:
            return { ...state, ...action.payload }
        default:
            return initialState
    }
}
