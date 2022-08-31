import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import Form from "./Form";
import './Modal.css';

type ModalProps = {
    onClickOutside:any,
    onKeyDown:any,
    modalRef:any,
    buttonRef:any,
    closeModal:any,
    item:any
}

export const Modal: React.FC<ModalProps> = ({
                          onClickOutside,
                          onKeyDown,
                          modalRef,
                          buttonRef,
                          closeModal,
                          item
                      }) => {

    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                role="dialog"
                aria-modal="true"
                className="modal-cover"
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                <div className="modal-area" ref={modalRef}>
                    <button
                        ref={buttonRef}
                        aria-label="Close Modal"
                        aria-labelledby="close-modal"
                        className="_modal-close"
                        onClick={closeModal}>
                    <span id="close-modal" className="_hide-visual">Close</span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" /></svg>
                    </button>
                    <div className="modal-body">
                        <Form closeModal={closeModal} item={item}/>
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};

export default Modal;
