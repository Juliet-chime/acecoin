import React, { useEffect, useRef } from 'react'
import { CloseModal, ModalBackground, ModalBody, ModalBodyContainer, ModalHeader } from './style'
import { FaTimes } from 'react-icons/fa'

const CustomModal = ({open,onClose,modalHeader,children}) => {
    const modalref = useRef(null)

    const closeModal = (e) => {
        if (modalref.current === e.target) {
          onClose()
        }
      }

    useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      }, [open, modalref])
    
  return (
  <>
        {open && (
        <ModalBackground ref={modalref} onClick={closeModal}>
            <ModalBodyContainer>
            <CloseModal>
            <div className='hide_icon' onClick={onClose}>
              <FaTimes />
            </div>
            </CloseModal>
        {modalHeader && <ModalHeader>{modalHeader}</ModalHeader>} 
            <ModalBody>
                {children}
            </ModalBody>
            </ModalBodyContainer>
        </ModalBackground> ) 
}
  </>
  )
}

export default CustomModal