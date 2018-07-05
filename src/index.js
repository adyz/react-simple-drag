import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resizable from './Resizable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resizable />, document.getElementById('root'));
registerServiceWorker();
