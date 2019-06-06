import * as React from 'react';
import PropTypes from 'prop-types';
import {css} from "emotion";
import {colors} from "../shared/colors";
import {roundingIntervalsClass} from "../shared/StyleHelper";
import {FooterComponent} from "./FooterComponent";

const header = css`
    ${roundingIntervalsClass};
    border-bottom: 1px solid ${colors.mainColor};
    
    h2 {
        margin: 0;
    }
`;

export const HeaderComponent = (props) => {
    return (
        <header className={header}>
            <h2>{props.label}</h2>
        </header>
    )
};

FooterComponent.propTypes = {
    label: PropTypes.string
};
