/*該文件專門為count組件生成action對象
 */
import { INCREMENT, DECREMENT } from '../constant'

//同步action,就是指action的值為object類型的一般對象
export const increment = (data) => ({ type: INCREMENT, data })
export const decrement = (data) => ({ type: DECREMENT, data })
//異步action,就是指action的值為函數,異步action中一般都會使用同步action，異步action不是必須的
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time)
  }
}
