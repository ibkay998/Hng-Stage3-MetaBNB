import React from 'react';
import PlaceList from '../../components/PlaceList/PlaceList';
import setting from '../../assets/setting-5.png';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Input,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function PlaceToStay() {
  return (
    <div className='flex flex-col mt-[100px]'>
      <div className='hidden lg:flex lg:justify-between cursor-pointer'>
        <a>Restaurant</a>
        <a>Cottage</a>
        <a>Castle</a>
        <a>Fantasy City</a>
        <a>beach</a>
        <a>carbins</a>
        <a>Off Grid</a>
        <a>farm</a>
        <div className='flex border-2 rounded-md'>
          <input type='text' placeholder='Location' />
          <img src={setting} alt='' />
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col lg:hidden'>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter By
            </MenuButton>
            <MenuList className='font-rose font-normal text-[20px]'>
              <MenuItem>Restaurant</MenuItem>
              <MenuItem>Cottage</MenuItem>
              <MenuItem>Castle</MenuItem>
              <MenuItem>Fantasy City</MenuItem>
              <MenuItem>beach</MenuItem>
              <MenuItem>carbins</MenuItem>
              <MenuItem>Off Grid</MenuItem>
              <MenuItem>farm</MenuItem>
              <MenuItem>
                <div className='flex border-2 rounded-md'>
                  <input type='text' placeholder='Location' />
                  <img src={setting} alt='' />
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>

      <PlaceList />
    </div>
  );
}

export default PlaceToStay;
