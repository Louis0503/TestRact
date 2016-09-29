"use strict";
import React from 'react';

class HelloMessage extends React.Component {
	// 若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。
	// 若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
    constructor(props) {
        super(props);
        this.displayName = '';
        this.state = {};
    }
    render() {
        return (
        	<div><h1> Hello {this.props.name}</h1></div>
        	)
    }
}

// Functional Component 可以視為 f(d) => UI，根據傳進去的 props 繪出對應的 UI。
//注意這邊 props 是傳入函式的參數。因此取用 props 不用加 this
const TestMessage = (props) => (
    <div>Hello {props.name}</div>
);


// PropTypes 驗證，若傳入的 props type 不是 string 將會顯示錯誤
HelloMessage.propTypes = {
  name: React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Zuck
HelloMessage.defaultProps = {
 name: 'Louis', 
}

export default HelloMessage;
