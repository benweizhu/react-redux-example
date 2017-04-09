import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SimpleItem.scss';

const cns = classNames.bind(styles);

class SimpleItem extends React.PureComponent {
  render() {
    return (
      <div className={cns('container')}>
        <input id={this.props.id} value={this.props.value} type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
        <label htmlFor={this.props.id}>{this.props.text}</label>
      </div>
    );
  }
}

SimpleItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SimpleItem;
