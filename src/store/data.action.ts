import { Action } from 'redux'
import { IBook, IData } from '../types'

export enum DataActionType {
    TAKE_BOOK = 'TAKE_BOOK',
    RETURN_BOOK = 'RETURN_BOOK',
    SET_DATA = 'SET_DATA',
}

export type TakeBookPayload = IBook
export type ReturnBookPayload = IBook
export type SetDataPayload = IData

type ActionCreator<T, P> = Action & {
    type: T
    payload: P
}

export type ActionData = TakeBookAction | ReturnBookAction | SetDataAction

type TakeBookAction = ActionCreator<DataActionType.TAKE_BOOK, TakeBookPayload>
type ReturnBookAction = ActionCreator<
    DataActionType.RETURN_BOOK,
    ReturnBookPayload
>
type SetDataAction = ActionCreator<DataActionType.SET_DATA, SetDataPayload>

export function takeBookAction(payload: IBook): TakeBookAction {
    return { type: DataActionType.TAKE_BOOK, payload }
}

export function returnBookAction(payload: IBook): ReturnBookAction {
    return { type: DataActionType.RETURN_BOOK, payload }
}

export function setDataAction(payload: IData): SetDataAction {
    return { type: DataActionType.SET_DATA, payload }
}
