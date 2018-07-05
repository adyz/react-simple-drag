import * as React from 'react';
import { render } from 'react-dom';
import Resizable from './Resizable';

const App = () => (
  <div>
    <Resizable name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById('root'));
