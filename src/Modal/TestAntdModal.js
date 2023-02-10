import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';

const TestAntdModal = ({ open, onOk, onCancel }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Modal title="Basic TestModal" open={open} onOk={onOk} onCancel={onCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>,
                document.getElementById('modal-root'),
            )}
        </>
    );
};
export default TestAntdModal;
