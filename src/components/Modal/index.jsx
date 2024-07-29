
import { ModalContainer, ModalStyle, CloseContainer, ButtonCloseModal, TitleModal } from "./styles"
import Close from '../../assets/close.svg';

export default function Modal({ isOpen, setModalOpen, children, title }) {
  if (isOpen) {
    return (
      <ModalContainer>
        <ModalStyle >
          <CloseContainer style={{ cursor: 'pointer'}} onClick={setModalOpen}>
            <TitleModal>
                {title}
            </TitleModal>
            <img src={Close} alt="Close" />
          </CloseContainer>
          <div>{children}</div>
          <CloseContainer style={{ cursor: 'pointer'}} onClick={setModalOpen}>
            <ButtonCloseModal onClick={setModalOpen}>Fechar</ButtonCloseModal>
          </CloseContainer>
        </ModalStyle>
      </ModalContainer>
    )
  }

  return null
}