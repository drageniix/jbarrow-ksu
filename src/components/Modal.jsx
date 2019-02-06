import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Choose from './Choose';
import { chooseStock } from '../redux/actions/common';

const Modal = ({ stock, setModalClose }) => {
    return stock ? (
        <div className="modal" onClick={setModalClose}>
            <div className="modal__content">
                <Choose />
            </div>
        </div>
    ) : null;
};

Modal.propTypes = {
    stock: PropTypes.object,
    setModalClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    stock: state.common.stock
});

const mapDispatchToProps = dispatch => ({
    setModalClose: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(chooseStock(null));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
