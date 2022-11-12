import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Divider
  } from '@chakra-ui/react'
import firstIcon from "../../assets/image66.png"
import secondIcon from "../../assets/image69.png"
import WalletButton from './WalletButton';


function ModalComponent({isOpen, onClose}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className='font-rose text-[24px]'>Connect Wallet</ModalHeader>
        <ModalCloseButton />
        <Divider/>
        <ModalBody>
          <p className='font-rose text-[14px] font-normal'>Choose your preferred wallet: </p>
        <div className='w-full flex flex-col last:mb-[32px]'>
            <WalletButton name="MetaMask" icon={firstIcon}/>
            <WalletButton name="WalletConnext" icon={secondIcon}/>
        </div>
        
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
