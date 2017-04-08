import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SimpleList.scss';

const cns = classNames.bind(styles);

class SimpleList extends React.Component {
  render() {
    const listItems = this.props.todos.map((todo, index) => (<li key={`todo-${index}`}>{todo.text}</li>));
    return (<ul className={cns('container')}>{listItems}</ul>);
  }
}

SimpleList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SimpleList;
