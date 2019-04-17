/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-16 20:09:22
*/

import React,{ Component } from 'react'
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux'
import { actionCreator } from './store'

import Layout from 'common/layout'


import './index.css'

class Home extends Component{
	componentDidMount(){
		this.props.handleCount()
	}
    render(){
    	const {	usernum,productnum,ordernum } = this.props;
        return (
        	<div className="Home">
        		<Layout>
        			<div style={{ background: '#ECECEC', padding: '30px' }}>
					    <Row gutter={16}>
					      <Col span={8}>
					        <Card title="用户数量" bordered={false}>{usernum}</Card>
					      </Col>
					      <Col span={8}>
					        <Card title="商品数据" bordered={false}>{productnum}</Card>
					      </Col>
					      <Col span={8}>
					        <Card title="订单数量" bordered={false}>{ordernum}</Card>
					      </Col>
					    </Row>
					 </div>
        		</Layout>
        	</div>
        )
    }
}

const mapStateToProps = (state)=>{
	return {
		usernum:state.get('home').get('usernum'),
		productnum:state.get('home').get('productnum'),
		ordernum:state.get('home').get('ordernum')
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
	    handleCount:()=>{
	    	const action = actionCreator.getCountAction();
	    	dispatch(action)
	    }
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(Home);