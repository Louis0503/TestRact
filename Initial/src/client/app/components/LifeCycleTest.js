'use strict'
import React from 'react';
// Mounting：已插入真實的 DOM
// Updating：正在被重新渲染
// Unmounting：已移出真實的 DOM
class LifeCycleTest extends React.Component{
	constructor(props){
		super(props);
		console.log('constructor');
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			name : 'Default'
		};
	}
	handleClick(){
		this.setState({'name' : 'Louis'});
		console.log('handleClick');
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	// 已載入元件收到新的參數時呼叫
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps');
	}
	componentWillUpdate() {
    	console.log('componentWillUpdate');
  	}
	componentDidUpdate() {
  	console.log('componentDidUpdate');
	}
	componentWillUnmount() {
  	console.log('componentWillUnmount');
	}
	render() {
    return (
      <div onClick={this.handleClick}>State : {this.state.name}</div>
    );
	}
};

export default LifeCycleTest;