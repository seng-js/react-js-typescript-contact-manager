import React from 'react';

type TriggerButtonProps = {
    triggerText:any,
    buttonRef:any,
    showModal:any
}

export const TriggerButton: React.FC<TriggerButtonProps> = ({ triggerText, buttonRef, showModal }) => {
    const iconButton = triggerText ? 'fa-plus-circle' : 'fa-pencil-square-o';
    return (
        <button
            className="btn btn-lg center modal-button"
            ref={buttonRef}
            onClick={showModal}><i className={"fa " + iconButton} aria-hidden="true"></i> {triggerText && 'Add people'}</button>
    );
};

export default TriggerButton;
