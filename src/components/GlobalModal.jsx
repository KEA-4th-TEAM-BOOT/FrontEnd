import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../recoil/modal';
import styled from 'styled-components';

const GlobalModal = () => {
    const [modal, setModal] = useRecoilState(modalState);

    if (!modal.isOpen) return null;

    const ModalContent = modal.content;
    return (
        <ModalContainer>
            <ModalBackdrop onClick={() => setModal({ ...modal, isOpen: false })}>
                <ModalContentWrapper onClick={(e) => e.stopPropagation()}>
                    <ModalContent {...modal.props} />
                </ModalContentWrapper>
            </ModalBackdrop>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalBackdrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContentWrapper = styled.div`
`

export default GlobalModal;
