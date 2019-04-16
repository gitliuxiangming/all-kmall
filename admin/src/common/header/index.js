/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/

import React,{ Component } from 'react'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
const { Header } = Layout;
import './index.css'

class LayoutHead extends Component{
    render(){
        return (
        	<div className='layout'>
        		<Header className="header">
			      <div className="logo">
			      	KMALL
			      </div>
			     	
			    </Header>
        	</div>
        )
    }
}


export default LayoutHead