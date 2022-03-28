/*
1,該文件是用於創見一個為count組件服務的reducer,reducer的本質就是一個函數
2,reducer函數 會接到兩個參數 分別為：之前的狀態（preState），動作對象（action）
*/
import { INCREMENT, DECREMENT } from '../constant'
const initState = 0 //初始化狀態
export default function countReducer(preState = initState, action) {
  // console.log(preState)
  //從action對象中獲取type,data
  const { type, data } = action
  //根據type決定如何加工數據
  switch (type) {
    case INCREMENT: //如果是＋
      return preState + data
    case DECREMENT: //如果是-
      return preState - data
    default:
      return preState
  }
}
