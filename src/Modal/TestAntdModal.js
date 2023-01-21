import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';
const TestAntdModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Modal title="Basic TestModal" open={props.open} onOk={props.onOk} onCancel={props.onCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>,
                document.getElementById('modal-root')
            )}
        </>
    );
};
export default TestAntdModal;
