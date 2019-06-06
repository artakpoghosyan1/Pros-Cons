import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import {colors} from '../shared/colors';
import {getUserData} from '../data/user/userActionCreators';
import {getProsConsData, addCons, addPros, removeCons, removePros} from '../data/prosCons/prosConsActionCreators';
import {ListComponent} from './ListComponent';
import {FooterComponent} from './FooterComponent';
import {roundingIntervalsClass} from "../shared/StyleHelper";
import {HeaderComponent} from "./HeaderComponent";

const ProsConsWrapperClass = css`
    margin: 0 auto;
    width: 600px;
    
    h1 {
        text-align: center;
    }
`;

const tableClass = css`
    border: 1px solid ${colors.mainColor};
    display: flex;
    height: calc(100vh - 100px);
`;

const columnsClass = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    
    & + & {
        border-left: 1px solid ${colors.mainColor};
    }
`;

const bodyClass = css`
    ${roundingIntervalsClass};
    flex: 1;
    overflow: auto;
`;

class ProsCons extends React.Component {
    constructor(props) {
        super(props);

        this.addPros = this.addPros.bind(this);
        this.addCons = this.addCons.bind(this);
        this.removePros = this.removePros.bind(this);
        this.removeCons = this.removeCons.bind(this);
    }

    componentDidMount() {
        const {getUserData, getProsConsData, userData: {groupId, userId}} = this.props;

        getUserData().then(() => {
            getProsConsData(groupId, userId)
        });
    }

    addPros(pros) {
        this.props.addPros(pros)
    }

    addCons(cons) {
        this.props.addCons(cons)
    }

    removePros(index) {
        this.props.removePros(index)
    }

    removeCons(index) {
        this.props.removeCons(index)
    }

    render() {
        return (
            <main className={ProsConsWrapperClass}>
                <h1>Should I ...?</h1>

                <div className={tableClass}>
                    <section className={columnsClass}>
                        <HeaderComponent label="Pro's"/>

                        <div className={bodyClass}>
                            <ListComponent
                                list={this.props.prosCons.pros}
                                updateProsCons={this.removePros}
                            />
                        </div>

                        <FooterComponent
                            updateProsCons={this.addPros}
                            placeholder="New Pro's"
                        />
                    </section>

                    <section className={columnsClass}>
                        <HeaderComponent label="Con's"/>

                        <div className={bodyClass}>
                            <ListComponent
                                list={this.props.prosCons.cons}
                                updateProsCons={this.removeCons}
                            />
                        </div>

                        <FooterComponent
                            updateProsCons={this.addCons}
                            placeholder="New Con's"
                        />
                    </section>
                </div>
            </main>
        )
    }
}

ProsCons.propTypes = {
    userData: PropTypes.object,
    prosCons: PropTypes.object,
    getUserData: PropTypes.func,
    getProsConsData: PropTypes.func,
    addPros: PropTypes.func,
    addCons: PropTypes.func,
    removePros: PropTypes.func,
    removeCons: PropTypes.func
};

const mapStateToProps = state => ({
    userData: state.user,
    prosCons: state.prosCons
});

const mapDispatchToProps = dispatch => ({
    getUserData: () => dispatch(getUserData()),
    getProsConsData: (groupId, userId) => dispatch(getProsConsData(groupId, userId)),
    addPros: (pros) => dispatch(addPros(pros)),
    addCons: (cons) => dispatch(addCons(cons)),
    removePros: (index) => dispatch(removePros(index)),
    removeCons: (index) => dispatch(removeCons(index)),
});

export const ProsConsComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProsCons);
