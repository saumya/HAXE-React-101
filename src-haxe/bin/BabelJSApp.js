//
// Version 1.0.0
// Application Entry : through Babel
//
import React from 'react'
import ReactDOM from 'react-dom'

//var SomeApp = require('./SomeApp').SomeApp;
//var ViewOne = require('./ViewOne').ViewOne;

import {SomeApp} from './SomeApp'
import {ViewOne} from './ViewOne'

//console.log('SomeApp',SomeApp);
//console.log('ViewOne',ViewOne);

ReactDOM.render(
  <div>
    <div> Babel + React </div>
    <SomeApp />
    <ViewOne />
  </div>,
  document.getElementById('recat-app')
);