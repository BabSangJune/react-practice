import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import TestAntdModal from '../Modal/TestAntdModal';
import TestModal from '../Modal/TestModal';

const Portal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal2 = () => {
        setIsModalOpen2(true);
    };
    const handleOk2 = () => {
        setIsModalOpen2(false);
    };
    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };

    const modalOpen = () => {
        setIsOpen(true);
    };
    const modalClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <h1>Portal Test</h1>
            <div>
                <h1>Test</h1>
                <Button type="primary" onClick={showModal}>
                    Open Modal1
                </Button>

                <Button type="primary" onClick={showModal2}>
                    Open Modal2
                </Button>

                <Modal title="Basic Modal" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
                    <p>Some contents...2</p>
                    <p>Some contents...2</p>
                    <p>Some contents...2</p>
                </Modal>

                <TestAntdModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
                <button onClick={modalOpen}>모달 열기</button>
                {isOpen && <TestModal modalClose={modalClose} />}
            </div>
        </>
    );
};

export default Portal;
