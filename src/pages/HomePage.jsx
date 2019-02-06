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
                    <img src="https://i.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.webp" />
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
