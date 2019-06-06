import * as React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {css} from "emotion";
import {buttonDefaultStylesClass, pullRightClass} from "../shared/StyleHelper";

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
    const handleClick = (index) => {
        props.updateProsCons(index)
    };

    return (
        <ul className={listClass}>
            {props.list.map((listItem, index) => (
                <li className={listItemClass} key={index}>
                    <div>{listItem}</div>

                    <div className={pullRightClass}>
                        <button
                            className={buttonDefaultStylesClass}
                            onClick={() => handleClick(index)}>
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
    updateProsCons: PropTypes.func
};

const mapStateToProps = state => ({
    prosCons: state.prosCons
});

// const mapDispatchToProps = dispatch => ({
//     updateProsConsData: (groupId, userId) => dispatch(updateProsConsData(groupId, userId)),
// });

export const ListComponent = connect(
    mapStateToProps,
    null
)(List);
