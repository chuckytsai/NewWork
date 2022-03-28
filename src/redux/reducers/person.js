import { ADD_PERSON } from '../constant'
//初始化人的列表
const initState = [{ id: '001', name: 'tom', age: 18 }] //初始化狀態
export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON: //若是增加一個人
      //preState.unshift(data)//此處不可以這樣寫，這樣會導致preState備改寫，personReducer就不是純函數了
      return [data, ...preState]
    default:
      return preState
  }
}
