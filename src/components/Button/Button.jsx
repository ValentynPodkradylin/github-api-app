import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const STYLES = [
    'button--primary',
    'button--secondary',
]

const SIZES = [
    'button--medium',
    'button--small',
    'button--large',
]

export const Button = ({
    type = 'button',
    text,
    onClick,
    size = 'button--medium',
    style = 'button--primary'
}) => {

    const checkButtonStyle = () => STYLES.includes(style) 
    ? style 
    : STYLES[0]

    const checkButtonSize = () => SIZES.includes(size) 
    ? size
    : SIZES[0]

    return (
        <button
            className={`button ${checkButtonStyle()} ${checkButtonSize()}`}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
