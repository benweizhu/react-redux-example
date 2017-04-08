import React from 'react';
import PropTypes from 'prop-types';

class HelloMessage extends React.PureComponent {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired
};

export default HelloMessage;
