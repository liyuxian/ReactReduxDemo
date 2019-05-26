// 1 导包
import { createStore } from 'redux';
//2 reduce
import { myReduce } from "./../reduces";
//3 创建store
export const myStore = createStore(myReduce);