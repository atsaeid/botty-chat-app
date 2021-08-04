// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import chat from '@src/views/apps/chat/store/reducer'

const rootReducer = combineReducers({
  chat
})

export default rootReducer
