import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setStock, setErrors } from '../redux/actions/common';

class Choose extends React.Component {
    state = {
        student: ''
    };

    chooseStock = () => {
        if (this.state.student && this.state.student.trim().includes(' ')) {
            this.props.setStock(this.props.stock, this.state.student);
        } else {
            this.props.setErrors('Please enter your full name.');
        }
    };

    onChange = e => {
        e.preventDefault();
        this.setState({ student: e.target.value });
    };

    render() {
        return (
            <div className="select-stock">
                <h1 className="select-stock__title">{this.props.stock.name}</h1>
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
    setStock,
    setErrors
};

Choose.propTypes = {
    stock: PropTypes.object,
    setStock: PropTypes.func,
    setErrors: PropTypes.func,
    error: PropTypes.string
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Choose);
