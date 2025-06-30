import React from 'react';
import Modal from 'react-modal';
import '../css/modal.css'; // Import your CSS file

Modal.setAppElement('#root');

export default function DeviceDetailModal({ isOpen, onRequestClose, deviceDetails }) {
    if (!deviceDetails) {
        return null;
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Device Details"
            className="Modal2"
            overlayClassName="Overlay"
        >
            <h3>Device Details</h3>
            <button className="close-button" onClick={onRequestClose}>Close</button>
            <div className="modal-content">
                <p><strong>Sticker:</strong> {deviceDetails.sticker}</p>
                <p><strong>Device Name:</strong> {deviceDetails.device_name}</p>
                <p><strong>Brand:</strong> {deviceDetails.brand}</p>
                <p><strong>Model:</strong> {deviceDetails.model}</p>
                <p><strong>Serial Number:</strong> {deviceDetails.serial_number}</p>
                <p><strong>Durable:</strong> {deviceDetails.durable}</p>
            </div>
        </Modal>
    );
}
