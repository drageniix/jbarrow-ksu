import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chooseStock } from '../redux/actions/common';

const Stock = ({ stock, chosen, chooseStock }) => {
    return (
        <div className="stock">
            <p className="stock--name">{stock.name}</p>
            <p className="stock--symbol">{stock.symbol}</p>
            <p className="stock--student">
                {stock.student ||
                    (!chosen && (
                        <button
                            className="stock--chose"
                            onClick={() => chooseStock(stock)}
                        >
                            Choose
                        </button>
                    )) ||
                    ''}
            </p>
        </div>
    );
};
const mapStateToProps = state => ({
    chosen: state.common.chosen
});

const mapDispatchToProps = {
    chooseStock
};

Stock.propTypes = {
    stock: PropTypes.object,
    chosen: PropTypes.bool,
    chooseStock: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stock);
