import React from "react";
import ReactDOM from "react-dom";

const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px", maxWidth: "100%",
    height: "400px", maxHeight: "100%",
    backgroundColor: "lightYellow", zIndex: "999"
};

const overlayStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "888"
};

const TestModal = (props) => {
    return ReactDOM.createPortal(
        <>
            <div style={modalStyle}>
                <h1>모달</h1>
                <button onClick={props.modalClose}>모달 닫기</button>
            </div>
            <div style={overlayStyle}></div>
        </>,
        document.getElementById("modal-root")
    );
};

export default TestModal;
