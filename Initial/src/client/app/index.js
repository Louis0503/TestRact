"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from "./components/HelloMessage";
import MyComponent from "./components/MyComponent";
import Timer from "./components/Timer";
import ToDoApp from "./components/ToDoApp";
import MarkdownEditor from "./components/MarkdownEditor";
import LifeCycleTest from "./components/LifeCycleTest";
import UserGithub from "./components/AsyncTest";

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<HelloMessage/>, document.getElementById('hello'));
ReactDOM.render(<MyComponent/>, document.getElementById('myComponent'));
ReactDOM.render(<Timer/>, document.getElementById('timer'));
ReactDOM.render(<ToDoApp/>, document.getElementById('todoApp'));
ReactDOM.render(<MarkdownEditor />, document.getElementById('markdownTest'));
ReactDOM.render(<LifeCycleTest />, document.getElementById('lifeCycleTest'));
ReactDOM.render(
  <UserGithub source="https://api.github.com/users/Louis0503" />,
  document.getElementById('asyncTest')
);