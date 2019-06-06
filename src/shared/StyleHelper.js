import {css} from "emotion";
import {colors} from './colors';

export const buttonDefaultStylesClass = css`
    border: 1px solid ${colors.mainColor};
    background: none;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    line-height: 10px;
    font-size: 20px;
    padding: 0;
    text-align: center;
    width: 20px;
    
    &:focus {
        outline: none;
    }
`;

export const pullRightClass = css`
    margin-left: auto;
`;

export const roundingIntervalsClass = css`
    padding: 10px;  
`;
