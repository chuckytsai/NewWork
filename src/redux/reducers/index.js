/**該文件用於彙整所有的reducer為一個總的reducer */
//引入combineReducers,用於彙總多個reducer
import { combineReducers } from 'redux'
//引入為count組件服務的reducer
import count from './count'
import persons from './person'

//彙總所有的reducer變為一個總的reducer
export default combineReducers({
  count,
  persons,
})
