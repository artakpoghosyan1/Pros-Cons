import * as React from 'react';
import PropTypes from 'prop-types';
import {css} from "emotion";
import {colors} from "../shared/colors";

const inputClass = css`
    border-color: transparent;
    border-width: 1px;
    width: 80%;
        
    &:hover, 
    &:focus {
        border-color: ${colors.mainColor};
        outline: none;
    }
`;

export const ListItemFieldComponent = (props) => {
    const [inputValue, setInputValue] = React.useState(props.value);
    const [inputOldValue, setInputOldValue] = React.useState(props.value);

    React.useEffect(() => {
        setInputValue(props.value);
    },  [props.value]);

    const handleChange = ({target}) => {
        setInputValue(target.value);
    };

    const handleBlur = ({target}) => {
        const newTrimmedValue = target.value.trim();

        if(inputOldValue !== newTrimmedValue) {
            props.updateProsCons(newTrimmedValue);
            setInputOldValue(newTrimmedValue);
        }
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
        />
    )
};

ListItemFieldComponent.propTypes = {
    value: PropTypes.string,
    updateProsCons: PropTypes.func
};
