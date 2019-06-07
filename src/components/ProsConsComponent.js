import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import {colors} from '../shared/colors';
import {getUserData} from '../data/user/userActionCreators';
import {
    getProsConsData,
    updateProsConsData
} from '../data/prosCons/prosConsActionCreators';
import {ListComponent} from './ListComponent';
import {FooterComponent} from './FooterComponent';
import {roundingIntervalsClass} from "../shared/StyleHelper";
import {HeaderComponent} from "./HeaderComponent";
import {prosConsSelector} from "../data/prosCons/selectors/prosConsSelector";
import {userDataSelector} from "../data/user/selectors/userDataSelector";
import {addProsCons, removeProsCons, updateProsConsItem} from "../data/dataUtility";

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
    min-height: 200px;
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

        this.addProsCons = this.addProsCons.bind(this);
        this.removeProsCons = this.removeProsCons.bind(this);
        this.updateProsCons = this.updateProsCons.bind(this);
    }

    componentDidMount() {
        const {getUserData, getProsConsData} = this.props;

        getUserData().then((response) => {
            const [{groupId}, {userId}] = response.userData;

            getProsConsData(groupId, userId);
        });
    }

    addProsCons(item, type) {
        const {prosCons, userData, updateProsConsData} = this.props;
        const newProsCons = addProsCons(prosCons, type, item);

        updateProsConsData(userData, newProsCons);
    }

    removeProsCons(index, type) {
        const {prosCons, userData, updateProsConsData} = this.props;
        const newProsCons = removeProsCons(prosCons, type, index);

        updateProsConsData(userData, newProsCons);
    }

    updateProsCons(index, type, newValue) {
        const {prosCons, userData, updateProsConsData} = this.props;
        const newProsCons = updateProsConsItem(prosCons, type, index, newValue);

        updateProsConsData(userData, newProsCons);
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
                                removeProsCons={this.removeProsCons}
                                updateProsCons={this.updateProsCons}
                                type="pros"
                            />
                        </div>

                        <FooterComponent
                            addProsCons={this.addProsCons}
                            placeholder="New Pro's"
                            type="pros"
                        />
                    </section>

                    <section className={columnsClass}>
                        <HeaderComponent label="Con's"/>

                        <div className={bodyClass}>
                            <ListComponent
                                list={this.props.prosCons.cons}
                                removeProsCons={this.removeProsCons}
                                updateProsCons={this.updateProsCons}
                                type="cons"
                            />
                        </div>

                        <FooterComponent
                            addProsCons={this.addProsCons}
                            placeholder="New Con's"
                            type="cons"
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
    updateProsConsData: PropTypes.func
};

const mapStateToProps = state => ({
    userData: userDataSelector(state),
    prosCons: prosConsSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getUserData: () => dispatch(getUserData()),
    getProsConsData: (groupId, userId) => dispatch(getProsConsData(groupId, userId)),
    updateProsConsData: (userData, prosCons) => dispatch(updateProsConsData(userData, prosCons))
});

export const ProsConsComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProsCons);
