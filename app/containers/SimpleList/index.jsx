import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { changeTodoStatus } from '../../actions/todoActions';
import SimpleItem from '../../components/SimpleItem';
import styles from './SimpleList.scss';

const cns = classNames.bind(styles);

const mapStateToProps = (state, ownProps) => ({ todos: ownProps.todos });
const mapDispatchToProps = dispatch => (bindActionCreators({ changeTodoStatus }, dispatch));

class SimpleList extends React.Component {

  handleItemChange = (e) => {
    this.props.changeTodoStatus({ text: e.target.value, complete: e.target.checked });
  };

  render() {
    const listItems = this.props.todos.map((item, index) => (
      <li key={`todo-${index}`}>
        <SimpleItem id={`todo-${index}`} value={item.text} checked={item.complete} onChange={this.handleItemChange} />
      </li>
    ));
    return (<ul className={cns('container')}>{listItems}</ul>);
  }
}

SimpleList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeTodoStatus: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleList);
