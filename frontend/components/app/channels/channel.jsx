import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleMouseEnter() {
    if (this.props.currentUser.id === this.props.server.admin_id) {
      this.setState({ active: true });
    }
  }

  handleMouseLeave() {
    if (this.props.currentUser.id === this.props.server.admin_id) {
      this.setState({ active: false });
    }
  }
  
  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteChannel();
  }

  render() {
    return (
      <NavLink to={`/channels/${this.props.server.id}/${this.props.channel.id}`}
        className="channel"
        activeClassName="selected"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="colorDefaultText-oas-QM icon-sxakjD">
          <path className="foreground-2W-aJk" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z"
            transform="translate(1.333 2)"></path>
        </svg>
        <div className="channel-name">{this.props.channel.name}</div>
        {this.state.active ? <button className="delete-channel-button" onClick={this.handleDelete}></button> : null}
      </NavLink >
    )
  };
};

export default Channel;