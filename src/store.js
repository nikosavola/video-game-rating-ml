import { createStore, combineReducers } from 'redux'

const genreReducer = (state = [], action) => {
  switch (action.type) {
  case 'genre/add': {
    const { id } = action
    console.log('added:', id)
    return [...state, id]
  }
  case 'genre/remove': {
    const { id } = action
    console.log('removed:', id)
    return state.filter((e) => e !== id)
  }
  default: {
    return state
  }
  }
}

const reducer = combineReducers({
  genres: genreReducer,
})

const store = createStore(
  reducer,
)

export default store
