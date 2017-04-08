import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SimpleList.scss';

const cns = classNames.bind(styles);

class SimpleList extends React.PureComponent {
  render() {
    const listItems = this.props.todos.map((item, index) => (<li key={`todo-${index}`}>{item.text}</li>));
    return (<ul className={cns('container')}>{listItems}</ul>);
  }
}

SimpleList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SimpleList;
