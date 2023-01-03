import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* stags of a component
Mount: three lifecycle hooks [constructor, render, DidMount]
update: [render, DidUpdate]
unmount: [WillUnmount]

life hooks:
1) constructor: invoked once the component is created and usually used to initialize the state
of the component

2) componentDidMount: invoked when the component is placed in the DOM and can be used to call Ajax services

3) render: used to render the content. this update the virtual DOM that's why we use setState()
these hooks are called in sequence

we cannot use lifecycle hooks in a stateless functional components

4)componentDidUpdate: used to makes Ajax calls to get data from the server. an optimization technique
is to save calls when there is no change in props or state

5)componentWillUnmount: when the component is deleted/removed from the DOM. This gives the opportunity
to make cleanup just before the comp. is removed
 */