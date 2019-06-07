import * as React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {css} from "emotion";
import {buttonDefaultStylesClass, pullRightClass} from "../shared/StyleHelper";
import {prosConsSelector} from "../data/prosCons/selectors/prosConsSelector";
import {ListItemFieldComponent} from "./ListItemFieldComponent";

const listClass = css`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const listItemClass = css`
    display: flex;
    & + & {
        margin-top: 10px;
    }
`;

const List = (props) => {
    const updateProsConsOnBlur = (index, newValue) => {
        props.updateProsCons(index, props.type, newValue);
    };

    return (
        <ul className={listClass}>
            {props.list.map((listItem, index) => (
                <li className={listItemClass} key={index}>
                    <ListItemFieldComponent
                        value={listItem}
                        updateProsCons={(newValue) => updateProsConsOnBlur(index, newValue)}
                        type={props.type}
                    />

                    <div className={pullRightClass}>
                        <button
                            className={buttonDefaultStylesClass}
                            onClick={() => props.removeProsCons(index, props.type)}>
                            -
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
};

List.propTypes = {
    list: PropTypes.array,
    removeProsCons: PropTypes.func,
    updateProsCons: PropTypes.func,
    type: PropTypes.string
};

const mapStateToProps = state => ({
    prosCons: prosConsSelector(state)
});

export const ListComponent = connect(
    mapStateToProps,
    null
)(List);
