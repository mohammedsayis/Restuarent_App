import   {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from 'redux-thunk'
import { restuarentListReducer } from "./reducer/restuarentReduce";
//To Generate MiddleWare
const reduces = combineReducers({
    restuarentReducer: restuarentListReducer      //key : function
})
const middleware = [thunk]
const store = createStore(reduces,applyMiddleware(...middleware))

export default store