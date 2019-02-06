import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setStock } from '../redux/actions/common';

class Choose extends React.Component {
    state = {
        student: ''
    };

    chooseStock = () => {
        this.props.setStock(this.props.stock, this.state.student);
    };

    onChange = e => {
        e.preventDefault();
        this.setState({ student: e.target.value });
    };

    render() {
        return (
            <div className="select-stock">
                <input
                    className="select-stock__input"
                    placeholder="Full Name"
                    onChange={this.onChange}
                />
                {this.props.error && (
                    <p className="select-stock__invalid">{this.props.error}</p>
                )}
                <button
                    className="select-stock__button"
                    onClick={this.chooseStock}
                >
                    Confirm
                </button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    stock: state.common.stock,
    error: state.common.error
});

const mapDispatchToProps = {
    setStock
};

Choose.propTypes = {
    stock: PropTypes.object,
    setStock: PropTypes.func,
    error: PropTypes.string
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Choose);
