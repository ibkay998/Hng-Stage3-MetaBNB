import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

function MenuDrawer({ isOpen, onClose, btnRef, lists }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color='white' />
        <DrawerBody
          bg='#A02279'
          
        >
          <div className='flex flex-col font-rose font-bold text-lg w-full first:mt-8'>
            {lists.map((list) => (
              <a
                href={list.link}
                className='text-white flex p-4 w-full items-center justify-center hover:bg-white hover:text-[#A02279]'
              >
                {list.name}
              </a>
            ))}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
