import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import Modal from '../components/Modal';

class HomePage extends React.Component {
    render() {
        const { stocks } = this.props;
        return (
            (stocks && (
                <Fragment>
                    <Modal />
                    <div className="all-stocks">
                        {stocks.map((stock, index) => (
                            <Stock key={index} stock={stock} />
                        ))}
                    </div>
                </Fragment>
            )) || (
                <div className="loading">
                    <img src="https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif" />
                </div>
            )
        );
    }
}

const mapStateToProps = state => ({
    stocks: state.common.stocks
});

HomePage.propTypes = {
    stocks: PropTypes.array
};

export default connect(
    mapStateToProps,
    null
)(HomePage);
