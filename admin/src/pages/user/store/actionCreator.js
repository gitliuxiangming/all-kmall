/*
* @Author: TomChen
* @Date:   2019-04-11 20:15:26
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:09:18
*/
import * as types from './actionTypes.js'
import { request,setUserName } from 'util'
import { GET_USERS } from 'api'


const getPageRequestAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}
const getPageDoneAction = ()=>{
	return {
		type:types.PAGE_DOWN
	}
}

export const setPageAction = (payload) =>{
	return {
		type:types.SET_PAGE,
		payload
	}
}


export const getPageAction = (page)=>{
	
	return (dispatch)=>{
		dispatch(getPageRequestAction())
		request({
			url:GET_USERS,
			data:{
				page:page
			}
		})
		.then(result=>{
			console.log(result)
			if(result.code == 0){
				const action = setPageAction(result.data)
				dispatch(action)
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
			dispatch(getPageDoneAction())
		})
	}
}