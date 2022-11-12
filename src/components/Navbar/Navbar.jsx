import React from 'react'
import Logo from '../../assets/Logo.png'
import { Button, useDisclosure } from '@chakra-ui/react'
import { CloseIcon,HamburgerIcon } from '@chakra-ui/icons'
import MenuDrawer from './MenuDrawer'
import ModalComponent from './Modal'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { 
        isOpen: isOpenReportModal, 
        onOpen: onOpenReportModal, 
        onClose: onCloseReportModal 
    } = useDisclosure()
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const lists = [
        {name:"Home", link:"/"},
        {name:"Place to stay", link:"/place-to-stay"},
        {name:"NFTs", link:"#"},
        {name:"Community", link:"#"},
    ]
  return (
    <div className='flex justify-between w-4/5 mt-[40px] items-center'>
        <img src={Logo} alt="logo" className="h-[32px]"   />
        <div className='hidden lg:flex font-rose lg:items-center text-[20px] font-normal'>
            {lists.map((list,index)=>(
                <a key={index} href={list.link} className="lg:pl-[25px] xl:pl-[48px]">{list.name}</a>
            ))}
        </div>
        <div className='flex lg:hidden'>
            <button ref={btnRef} className="bg-[#A02279] p-3" onClick={onOpen} >
                <HamburgerIcon color="white" w={6} h={6}/>
            </button>
            <MenuDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} lists={lists}/>
        </div>

        <div className='hidden lg:flex'>
            <button className="bg-[#A02279]  pl-[27px] pr-[26px] h-[48px] w-[170px] text-white" onClick={onOpenReportModal} >Connect Wallet</button>
        </div>
        <ModalComponent isOpen={isOpenReportModal} onClose={onCloseReportModal}/>
        
    </div>
  )
}

export default Navbar