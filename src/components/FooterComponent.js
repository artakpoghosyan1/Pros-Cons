import * as React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import {buttonDefaultStylesClass, roundingIntervalsClass} from '../shared/StyleHelper';
import {colors} from '../shared/colors';

const footerClass = css`
    ${roundingIntervalsClass};
    display: flex;
`;

const footerLeftClass = css`
    flex: 1;
    margin-right: 8px;
`;

const inputClass = css`
    border: 1px solid ${colors.mainColor};
    box-sizing: border-box;
    padding: 4px;
    width: 100%;
`;

export const FooterComponent = (props) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleClick = () => {
        const trimmedValue = inputValue.trim();

        if (trimmedValue) {
            props.addProsCons(trimmedValue, props.type);
            setInputValue('');
        }
    };

    const handleChange = ({target}) => {
        setInputValue(target.value);
    };

    return (
        <footer className={footerClass}>
            <div className={footerLeftClass}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={props.placeholder}
                />
            </div>

            <button
                className={buttonDefaultStylesClass}
                onClick={handleClick}>
                +
            </button>
        </footer>
    )
};

FooterComponent.propTypes = {
    addProsCons: PropTypes.func,
    placeholder: PropTypes.string
};
