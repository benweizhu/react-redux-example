import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SimpleItem.scss';

const cns = classNames.bind(styles);

class SimpleItem extends React.PureComponent {
  render() {
    return (
      <div className={cns('container')}>
        <input {...this.props} type="checkbox" />
        <label htmlFor={this.props.id}>{this.props.value}</label>
      </div>
    );
  }
}

SimpleItem.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SimpleItem;
