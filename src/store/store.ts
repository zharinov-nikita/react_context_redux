import { createStore } from 'redux'
import { rootReducer } from './root.reducer.ts'
import {
    TypedUseSelectorHook,
    useSelector as useSelectorRedux,
} from 'react-redux'

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux
