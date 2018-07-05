import * as React from 'react';

import './iconlink.css';

interface Props {
  className: string;
  label: string;
}

class IconLink extends React.Component<Props> {
  render() {
    return (
      <div className={`iconLink ${this.props.className}`}>
        {this.props.children}
        <span className="iconLink__label">{this.props.label}</span>
      </div>
    );
  }
}

export default IconLink;
