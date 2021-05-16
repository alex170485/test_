import {applyMiddleware, combineReducers, createStore} from "redux";
import {navigationReducer} from "./navigationReducer";
import thunk from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {contentReducer} from "./contentReducer";
import {minuteReducer} from "./minuteReducer";

const RootReducer = combineReducers({
    navigation: navigationReducer,
    content: contentReducer,
    minute: minuteReducer
})
export type RootStateReduxType = ReturnType<typeof RootReducer>

let store = createStore(RootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store


export default store;

export const useTypedSelector: TypedUseSelectorHook<RootStateReduxType> = useSelector