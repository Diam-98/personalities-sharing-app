import React, { useState } from "react";
import { Avatar } from "antd";
import avatar from "../assets/images/avatar.png";
import {
  DownOutlined,
  StopOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";

const HeaderComponent = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    <div>
      <header>
        <Avatar src={avatar} alt='user-avatar' />

        {openDropDown ? (
          <div className='dropdown'>
            <UpOutlined onClick={handleOpenDropDown} />
          </div>
        ) : (
          <div className='dropdown'>
            <DownOutlined onClick={handleOpenDropDown} />
          </div>
        )}

        {openDropDown && (
          <ul className='dropdown-list'>
            <li>
              <a href=''>
                <UserOutlined />
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href=''>
                <StopOutlined /> <span>Deconnexion</span>
              </a>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default HeaderComponent;
