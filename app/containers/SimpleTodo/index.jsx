import React from 'react';
import PropTypes from 'prop-types';
import SimpleList from '../../components/SimpleList';

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
      console.log('do validate');
    }
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleOnChange} onKeyPress={this.handleKeyPress} />
        <SimpleList items={['a', 'b', 'c']} />
      </div>
    );
  }
}

SimpleTodo.propTypes = {

};

export default SimpleTodo;
