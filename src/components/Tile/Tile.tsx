import * as React from 'react';

import './tile.css';

interface Props {
  className: string;
}

class Tile extends React.Component<Props> {
  render() {
    return (
      <div className={`tile ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Tile;
