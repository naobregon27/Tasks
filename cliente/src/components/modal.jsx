// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="relative bg-white bg-opacity-40 p-6 rounded-lg shadow-lg z-10">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default Modal;
