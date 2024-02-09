import React from "react";
import pc from "../assets/pc-logo.png";
import mobile from '../assets/mobile-logo.png'
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiCirclesThreeFill } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";


const StyledDiv = styled.div`
  background-color: ${(props) => props.$bg};
`;

const SideBar = () => {
  return (
    <StyledDiv className="sm:flex flex-col items-center lg:items-start sm:gap-y-10 h-screen lg:p-14 p-4 lg:w-2/12 sm:w-1/12 hidden" $bg="#fafafa">
      <StyledDiv>
        <img src={pc} alt="pc-logo" className="hidden lg:block"/>
        <img src={mobile} alt="mobile-logo" className="lg:hidden"/>
      </StyledDiv>

      <StyledDiv className="flex flex-col items-center lg:items-start sm:gap-y-[30px]">
        <h6 className="pb-4 text-xs">MAIN MENU</h6>
          <StyledDiv className="flex items-center gap-x-4">
            <MdDashboard/>
            <a href="#" className="hidden lg:block">Dashboard</a>
          </StyledDiv>
          <StyledDiv className="flex items-center gap-x-4">
            <FaUserPlus />
            <a href="#" className="hidden lg:block">Recruitment</a>
          </StyledDiv>
          <StyledDiv className="flex items-center gap-x-4">
            <AiFillSchedule />
            <a href="#" className="hidden lg:block">Schedule</a>
          </StyledDiv>
          <StyledDiv className="flex items-center gap-x-4">
            <PiUsersThreeFill />
            <a href="#" className="hidden lg:block">Employee</a>
          </StyledDiv>
          <StyledDiv className="flex items-center gap-x-4">
            <PiCirclesThreeFill />
            <a href="#" className="hidden lg:block">Department</a>
          </StyledDiv>
        </StyledDiv>

      <StyledDiv className="flex flex-col items-center lg:items-start sm:gap-y-[30px]">
        <h6 className="pb-4 text-xs">OTHER</h6>
        <StyledDiv className="flex items-center lg:items-start gap-x-4">
          <FaHeadphones />
          <a href="#" className="hidden lg:block">Support</a>
        </StyledDiv>
        <StyledDiv className="flex items-center gap-x-4">
          <IoSettingsSharp />
          <a href="#" className="hidden lg:block">Settings</a>
        </StyledDiv>
      </StyledDiv>

    </StyledDiv>
  );
};

export default SideBar;
