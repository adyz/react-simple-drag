import * as React from 'react';

import './resizeable.css';
import Tile from './components/Tile/Tile';
import IconLink from './components/IconLink/IconLink';

import * as FontAwesome from 'react-icons/lib/fa';

import getElementOffset from './utils/getElementOffset';

interface Props {
  name: string;
}

interface State {
  positionPercent: number;
  dragging: boolean;
}

class Resizeable extends React.Component<Props, State> {
  // tslint:disable-next-line:no-any
  parentElement: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      positionPercent: 50,
      dragging: false
    };
  }

  // tslint:disable-next-line:no-any
  move = (event: any) => {
    event.preventDefault();
    const parentWidth: number = this.parentElement.offsetWidth;
    const parentLeft = getElementOffset(this.parentElement).left;

    const testLeft: number = event.clientX - parentLeft;
    const perc: number = (testLeft / parentWidth * 100);

    if (this.state.dragging && (perc > 0) && (perc < 100)) {
      this.setState(prevState => {
        return { ...prevState, positionPercent: perc };
      });
    }
  }

  start = () => {
    this.setState((prevState: State) => {
      return { ...prevState, dragging: true };
    });
  }

  end = () => {
    console.log('Drag ended');
    this.setState(prevState => {
      return { ...prevState, dragging: false };
    });
  }
  render() {
    return (
      <div className="parent">
        <div
          className="wrapper"
          ref={el => {
            this.parentElement = el;
          }}
        >
          <div className="separator">
            <div
              className="separator__ui"
              style={{
                left: this.state.positionPercent + '%'
              }}
            />
            <div
              draggable={true}
              className="separator__invisible"
              onDrag={this.move}
              onDragEnd={this.end}
              onDragStart={this.start}
              style={{
                left: this.state.positionPercent + '%'
              }}
            />
          </div>
          <div className="block" style={{width: this.state.positionPercent + '%'}}>
            <div 
              className="block__content" 
              style={{width: this.parentElement ? this.parentElement.offsetWidth + 'px' : 'auto' }}
            >
              <Tile className="block__tile">
                <p>Discover this new tile</p>
              </Tile>
              <Tile className="block__tile">
                <p>Lean how to write text</p>
              </Tile>
              <Tile className="block__tile">
                <p>Build this database</p>
              </Tile>
              <Tile className="block__tile">
                <p>Setting up the code is fine</p>
              </Tile>
            </div>
          </div>
          <div className="block" style={{width: 100 - this.state.positionPercent + '%'}}>
            <div 
              className="block__content" 
              style={{width: this.parentElement ? this.parentElement.offsetWidth + 'px' : 'auto' }}
            >
              <IconLink label="Take a Briefcase" className="block__iconLink">
                <FontAwesome.FaBriefcase />
              </IconLink>
              <IconLink label="Create a new Anchor" className="block__iconLink">
                <FontAwesome.FaAnchor />
              </IconLink>
              <IconLink
                label="Add new item in your Calendar"
                className="block__iconLink"
              >
                <FontAwesome.FaCalendar />
              </IconLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resizeable;
