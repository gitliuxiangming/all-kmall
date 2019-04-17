/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-16 20:09:36
*/

import React,{ Component } from 'react'
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux'
import { actionCreator } from './store'
import Layout from 'common/layout'


import './index.css'


const columns = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '是否管理员',
  dataIndex: 'isAdmin',
  key: 'isAdmin',
  render:(isAdmin)=>isAdmin?'是':'否'
}, {
  title: 'email',
  dataIndex: 'email',
  key: 'email',
}, {
  title: '手机',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '注册时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
}];
class User extends Component{
	componentDidMount(){
		this.props.handlePage()
	}
    render(){
    	const { list,current,pageSize,total,handlePage,isFetching } = this.props;
    	const dataSource = list.map((user)=>{
    		return {
    			key: user.get('_id'),
				username: user.get('username'),
			    isAdmin: user.get('isAdmin'),
				email: user.get('email'),
				phone:user.get('phone'),
				createdAt:user.get('createdAt')
    		}
    	}).toJS()//将immutable数据转换为数组
    	console.log(list)
        return (
        	<div className="User">
        		<Layout>
        			<Table 
        				dataSource={dataSource} 
        				columns={columns} 
        				pagination={{
        					current:current,
        					pageSize:pageSize,
        					total:total
        				}}
        				onChange = {(page)=>{
        					handlePage(page)
        				}}
        				loading={{
        					spinning:isFetching,
        					tip:'正在加载数据'
        				}}
        			/>
        		</Layout>
        	</div>
        )
    }
}


const mapStateToProps = (state)=>{
	return {
		list:state.get('user').get('list'),
		current:state.get('user').get('current'),
		pageSize:state.get('user').get('pageSize'),
		total:state.get('user').get('total'),
		isFetching:state.get('user').get('isFetching')
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
	    handlePage:(page)=>{
	    	const action = actionCreator.getPageAction();
	    	dispatch(action)
	    }
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(User);