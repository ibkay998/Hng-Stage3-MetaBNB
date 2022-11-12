import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

function MenuDrawer({isOpen,onClose,btnRef,lists}) {
  return (
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {lists.map((list)=>(
                <a href={list.link} className="" >{list.name}</a>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  )
}

export default MenuDrawer