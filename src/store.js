import { createStore, combineReducers } from 'redux'

const genreReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
  case 'genre/add':
    return { genres: }
  default:
    return state
  }
}

const reducer = combineReducers({
  genres: genreReducer,
})

const store = createStore(
  reducer,
)

export default store
