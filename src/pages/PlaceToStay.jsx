import React from 'react';
import PlaceList from '../components/PlaceList/PlaceList';
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
      <div className='hidden lg:flex lg:justify-between lg:items-center cursor-pointer'>
        <a>Restaurant</a>
        <a>Cottage</a>
        <a>Castle</a>
        <a>fantasy City</a>
        <a>beach</a>
        <a>Carbins</a>
        <a>Off Grid</a>
        <a>Farm</a>
        <div className='flex border-2 rounded-md items-center'>
          <button  className='w-[160px] py-[10px] pl-[14px] focus:outline-0 font-normal font-rose' >
            <div className='flex justify-between'>
              <p>Location</p>
              <img src={setting} alt='' className='h-[24px]'/>
            </div>
            </button>
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
              <MenuItem>f City</MenuItem>
              <MenuItem>beach</MenuItem>
              <MenuItem>Carbins</MenuItem>
              <MenuItem>Off Grid</MenuItem>
              <MenuItem>Farm</MenuItem>
              <MenuItem>
                <div className='flex border-2 rounded-md'>
                  <input className='focus:outline-0 focus:border-0 outline-0'  type='text' placeholder='Location' />
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
