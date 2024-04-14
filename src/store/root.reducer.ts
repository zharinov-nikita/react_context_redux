import { dataReducer } from './data.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({ data: dataReducer })
