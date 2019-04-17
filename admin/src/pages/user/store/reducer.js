/*
* @Author: TomChen
* @Date:   2019-04-11 18:56:06
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:51:38
*/
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	list:[],
	current:1,
	pageSize:0,
	total:0,
	isFetching:false
})


export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		console.log(payload)
		state.merge({
			list:fromJS(action.payload.list),
			current:fromJS(action.payload.current),
			pageSize:fromJS(action.payload.pageSize),
			total:fromJS(action.payload.total)
		})
	}
	if(action.type == types.PAGE_REQUEST){
		return state.set('isFetching',true)
	}
	if(action.type == types.PAGE_DOWN){
		return state.set('isFetching',false)
	}

	return state;
}