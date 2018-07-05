import * as React from 'react';
import { render } from 'react-dom';
import Resizable from './Resizable';

import './app.css';

const App = () => (
  <div>
    <Resizable name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById('root'));
