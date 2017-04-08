import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SimpleFilters.scss';

const cns = classNames.bind(styles);

class SimpleFilters extends React.PureComponent {
  render() {
    const radios = this.props.values.map(value => (
      <div key={`filter-${value}`} className={cns('radio')}>
        <input type="radio" name={this.props.name} value={value} id={`filter-${value}`} onChange={this.props.onChange} checked={this.props.value === value} />
        <label htmlFor={`filter-${value}`}>{value}</label>
      </div>
    ));
    return (<div className={cns('container')}>{radios}</div>);
  }
}

SimpleFilters.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SimpleFilters;
