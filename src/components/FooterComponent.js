import * as React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import {buttonDefaultStylesClass, pullRightClass, roundingIntervalsClass} from '../shared/StyleHelper';
import {colors} from '../shared/colors';

const footerClass = css`
    ${roundingIntervalsClass};
    display: flex;
`;

const inputClass = css`
    border: 1px solid ${colors.mainColor};
    padding: 4px;
`;

export const FooterComponent = (props) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleClick = () => {
        if(inputValue) {
            props.updateProsCons(inputValue);
            setInputValue('');
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <footer className={footerClass}>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={props.placeholder}
                />
            </div>

            <div className={pullRightClass}>
                <button
                    className={buttonDefaultStylesClass}
                    onClick={handleClick}>
                    +
                </button>
            </div>
        </footer>
    )
};

FooterComponent.propTypes = {
    updateProsCons: PropTypes.func,
    placeholder: PropTypes.string
};
