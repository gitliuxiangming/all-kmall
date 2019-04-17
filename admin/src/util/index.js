/*
* @Author: TomChen
* @Date:   2019-04-16 18:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-16 18:53:03
*/

import axios from 'axios';

export const request = (options)=>{
	return new Promise((resolve,reject)=>{
		const params = {
        	method:options.method || 'get',	
			url:options.url || '',
			data:options.data || '',
			withCredentials:true
		}
		switch(params.method.toUpperCase()){
			case 'GET':
			case 'DELETE':
				params.params = options.data
				break
			default:
				params.data = options.data
		}
		axios(params)
		.then(result=>{
			const data = result.data
			if(data == 10){//没有权限
				//移除前端登录信息
				removeUserName()
				window.ocation.href = '/login'
				reject('没有权限')
			}else{
				resolve(result.data);
			}
		})
		.catch(err=>{
			reject(err)
		})
	})
}

export const setUserName = (username)=>{
	window.localStorage.setItem('username',username)
}
export const getUserName = ()=>{
	return window.localStorage.getItem('username')
}
export const removeUserName = ()=>{
	window.localStorage.removeItem('username')
}






