import React, { useState } from 'react'
import CustomModal from '../../component/customModal/CustomModal'
import HomeModalContent from './HomeModalContent'
import Custombutton from '../../component/button'

const HomePage = () => {

  const [showModal, setShowModal] = useState(true)

  const onCloseModal = () => {
    setShowModal(false)
  }

  const onOpenModal = () => {
    setShowModal(true)
  }

  return (
    <div>
      <Custombutton width='10%' margin='1rem auto 0rem auto' onClick={onOpenModal} text={'Open Modal'} bg='#035FFF' />
      <CustomModal open={showModal} onClose={onCloseModal}>
        <HomeModalContent />
      </CustomModal>
    </div>
  )
}

export default HomePage