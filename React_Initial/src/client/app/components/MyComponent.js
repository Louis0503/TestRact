"use strict";
import React from 'react';


const lists = ['Test1','Test2','Test3','Test4'];
//  注意元件開頭第一個字母都要大寫
class MyComponent  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // render 是 Class based 元件唯一必須的方法（method）
  render() {
    let text = this.props.name;
    return (
      <ul>
        {lists.map((result, index) => {
          return (<li key={index}>{result}</li>);
        })}
      </ul>
    );
  }
};

// PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
MyComponent.propTypes = {
  todo: React.PropTypes.object,
  name: React.PropTypes.string,
};

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
MyComponent.defaultProps = {
 todo: {}, 
 name: 'defaultName', 
};


//Functional Component :單純地 render UI 的 stateless components
const TestComponent = () => (
    <div>Hello, TestComponent</div>
  );

export default MyComponent;