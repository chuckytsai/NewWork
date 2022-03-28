/**
 * 該文件專門用於報漏一個store對象 整個應用只有一個store對象
 */
//引入 createStore,專門用於創見redux中最為核心的store對象
//applyMiddleware 執行中介值
import { createStore, applyMiddleware } from "redux";
//引入彙總之後的reducer
import reducer from "./reducers";
//引入redux-thunk,用於支持異步action
import thunk from "redux-thunk";
//引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

//暴露store
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
