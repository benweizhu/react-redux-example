import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import SimpleList from '../SimpleList';
import SimpleFilters from '../../components/SimpleFilters';
import { addTodo, changeFilter } from '../../actions/todoActions';
import styles from './SimpleTodo.scss';

const cns = classNames.bind(styles);

const mapStateToProps = state => ({
  todos: state.simpleTodo.todos,
  selectedFilter: state.simpleTodo.selectedFilter
});
const mapDispatchToProps = dispatch => (bindActionCreators({ addTodo, changeFilter }, dispatch));

class SimpleTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleOnInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  handleOnFilterChange = (e) => {
    this.props.changeFilter(e.target.value);
  };

  render() {
    return (
      <div className={cns('container')}>
        <h4>Simple React Redux Todo</h4>
        <div className={cns('todo')}>
          <input className={cns('todo-input')} type="text" value={this.state.inputValue} onChange={this.handleOnInputChange} onKeyPress={this.handleKeyPress} />
          <SimpleList todos={this.props.todos} />
          <SimpleFilters name="filters" value={this.props.selectedFilter} values={['all', 'finished', 'unfinished']} onChange={this.handleOnFilterChange} />
        </div>
      </div>
    );
  }
}

SimpleTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTodo);
