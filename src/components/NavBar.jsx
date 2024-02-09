import React from 'react'
import styled from 'styled-components'
import { IoNotificationsSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import profile from '../assets/profile.jpg';
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";

const StyledNav = styled.nav`
    background-color:white;
    margin-left:50px;
    height:100px;
    border-bottom:1px solid #f2f2f2;
    padding-right:50px;
`;

const CustomInput = styled.input`
    background-color:rgb(248 250 252);
    border:none;
    padding:0px 5px;

    &:focus{
        outline: none;
    }
`;

const NavBar = () => {
  return (
    <StyledNav className='flex items-center justify-between gap-8'>
        <FaBars className='xl:hidden block'/>
        <div className='sm:flex justify-between items-center rounded border-2 border-solid border-black p-2 bg-slate-50 hidden'>
            <CustomInput type='text' name='search' placeholder='Search'/>
            <FiSearch />
        </div>
        <FiSearch className='sm:hidden block'/>
        <div className='flex items-center sm:gap-x-8 gap-x-4'>
            <IoNotificationsSharp />
            <MdMessage />
            <div className='flex items-center gap-x-4'>
            <div className='w-8 h-8 rounded-2xl' style={{backgroundImage:`url(${profile})`,backgroundSize:'cover'}}></div>
            <div className='hidden sm:block'>Admirra John</div>
            </div>
            <FaAngleDown />
        </div>
    </StyledNav>
  )
}

export default NavBar