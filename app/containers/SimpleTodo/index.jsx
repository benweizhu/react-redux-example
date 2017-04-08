import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import SimpleList from '../../components/SimpleList';
import { addTodo } from '../../actions/todoActions';
import styles from './SimpleTodo.scss';

const cns = classNames.bind(styles);

const mapStateToProps = state => ({ todos: state.simpleTodo.todos });
const mapDispatchToProps = dispatch => (bindActionCreators({ addTodo }, dispatch));

class SimpleTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleOnChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <div className={cns('container')}>
        <h4>Simple React Redux Todo</h4>
        <div className={cns('todo')}>
          <input type="text" value={this.state.inputValue} onChange={this.handleOnChange} onKeyPress={this.handleKeyPress} />
          <SimpleList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

SimpleTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTodo);
