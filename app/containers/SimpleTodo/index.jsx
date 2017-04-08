import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SimpleList from '../../components/SimpleList';
import { addTodo } from '../../actions/todoActions';

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
    }
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} onKeyPress={this.handleKeyPress} />
        <SimpleList todos={this.props.todos} />
      </div>
    );
  }
}

SimpleTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTodo);
