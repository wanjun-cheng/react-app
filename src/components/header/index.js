import React, { Component } from 'react';
import './header.less';

class Header extends Component {
  render() {
    const { param1 } = this.props;
    return (
      <div className="m-header">
        Header {param1}
      </div>
    )
  }
}

export default Header;