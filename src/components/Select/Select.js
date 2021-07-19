import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const Select = (props) => {
    const { id, name, value, onChange, labelText, children } = props;
    return (
        <div className="filter">
            <label htmlFor={id} className="filter__label">{labelText} </label>
            <select
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className="filter__select"
            >
                {children}
            </select>
        </div>
    );
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};

