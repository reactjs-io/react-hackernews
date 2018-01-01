import TYPES from './types'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'SET_COUNTER':
      return action.counter
    default:
      return state
  }
}

export const activeType = (state = null, action) => {
  switch (action.type) {
    case TYPES.SET_ACTIVE_TYPE:
      return action.activeType
    default:
      return state
  }
}

export const itemsPerPage = (state = 20) => state

export const items = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_ITEMS:
      return {
        ...state,
        ...action.items.reduce((result, item) => {
          if (item) {
            result[item.id] = item
          }
          return result
        }, {}),
      }
    default:
      return state
  }
}

export const users = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_USER:
      return {
        ...state,
        [action.id]: action.user || false,
      }
    default:
      return state
  }
}

export const lists = (
  state = {
    top: [],
    new: [],
    show: [],
    ask: [],
    job: [],
  },
  action,
) => {
  switch (action.type) {
    case TYPES.SET_LIST:
      return {
        ...state,
        [action.listType]: action.ids,
      }
    default:
      return state
  }
}

export default { counter, activeType, itemsPerPage, items, users, lists }