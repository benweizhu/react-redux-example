import React from 'react';
import PropTypes from 'prop-types';

class SimpleList extends React.PureComponent {
  render() {
    const listItems = this.props.todos.map(item => (<li key={item}>{item}</li>));
    return (<ul>{listItems}</ul>);
  }
}

SimpleList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SimpleList;
