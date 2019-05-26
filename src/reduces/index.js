
import {SHOW_MESSAGE } from "./../types";

const initState ={
    showText : 'init text '
} 
// 接受一个发起的action 和旧state  返回一个根据 action 处理过后的新state
export const myReduce = (state = initState ,action)=>{
    switch (action.type) {
        case SHOW_MESSAGE:
            return {
                showText :' you click button '
            }
    
        default:
            return state ;
    }

}