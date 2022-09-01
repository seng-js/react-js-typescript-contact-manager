import React, {Component} from 'react';
import TriggerButton from "./TriggerButton";
import Modal from "./Modal";

export class ContainerModal extends Component<any> {
    state = { isShown: false };
    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
        });
        this.toggleScrollLock();
    };
    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
    onKeyDown = (event: { keyCode: number; }) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };
    onClickOutside = (event: any) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };

    toggleScrollLock = () => {
        const html = document.querySelector('html') as HTMLHtmlElement | null;
        html?.classList.toggle('scroll-lock');
    };

    private closeButton: any;
    private TriggerButton: any;
    private modal: any;

    render() {
        const {triggerText, item} = this.props;
        return (
            <React.Fragment>
                <TriggerButton
                    showModal={this.showModal}
                    buttonRef={(n: any) => (this.TriggerButton = n)}
                    triggerText={triggerText}
                />
                {this.state.isShown ? (
                    <Modal
                        modalRef={(n: any) => (this.modal = n)}
                        buttonRef={(n: any) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                        item={item}
                    />
                ) : null}
            </React.Fragment>
        );
    }
}

export default ContainerModal;
