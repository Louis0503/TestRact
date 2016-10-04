'use strict'
import React from 'react';

const TodoList = (props) => (
    <ul>
        {
            props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))
        }
    </ul>
);

// 整個 App 的主要元件，這邊比較重要的是事件處理的部份
class ToDoApp extends  React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
        	items :[],
        	text : 'default',
        };
    }
    onChange(e){
    	this.setState({text: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		const nextItems = this.state.items.concat(
			[{text: this.state.text, id : Date.now()}]);
		const nextText = 'default';
		this.setState({items : nextItems, text: nextText});
	}
    render() {
        return (
	        <div>
	        	<h3>TodoList</h3>
	        	<TodoList items = {this.state.items}/>
	        	<form onSubmit = {this.handleSubmit}>
	        		<input onChange = {this.onChange} value = {this.state.text}/>
	        		<button>{'Add #' + (this.state.items.length +1)}</button>
	        	</form>
	        </div>
        );
    }
}

export default ToDoApp;
