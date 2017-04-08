import React from 'react';
import PropTypes from 'prop-types';

class SimpleList extends React.PureComponent {
  render() {
    const listItems = this.props.items.map(item => (<li key={item}>{item}</li>));
    return (<ul>{listItems}</ul>);
  }
}

SimpleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SimpleList;
