import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk)) // applyMiddleware для создание мидлвеиров тоесть проверок на стороне сервера / thunk это Middleware для асинхронных функций