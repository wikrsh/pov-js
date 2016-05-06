// -*- coding: utf-8 -*-

import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import demoApp from './reducers';

import TopPage from './top';
import EditPage from './edit';
import RunPage from './run';

let store = createStore(demoApp);

// const TopPage = React.createClass({
//   getInitialState: function() {
//     return {
//       image: image
//     };
//   },
//   onChangePixel: function(rowIndex, colIndex, value){
//     let newImage = JSON.parse(JSON.stringify(this.state.image));
//     newImage[rowIndex][colIndex] = value;
//     this.setState({image: newImage});
//   },
//   render: function() {
//     return (
//       <div>
//         <Link to="/test">test link</Link>
//         <div id="example">
//           <Pov
//              image={this.state.image}
//              size={10}
//              interval={100} />
//         </div>
//         <div id="example2">
//           <PixelEditor
//              width={300}
//              height={300}
//              matrix={this.state.image}
//              onChange={this.onChangePixel} />
//         </div>
//       </div>
//     );
//   }
// });

const TestPage = (props) => {
  return (
    <div>Hello,Test</div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={TopPage}></Route>
      <Route path="/edit" component={EditPage}></Route>
      <Route path="/run" component={RunPage}></Route>
      <Route path="/test" component={TestPage}></Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
