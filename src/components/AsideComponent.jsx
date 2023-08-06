import React from "react";
import {
  FileAddOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const AsideComponent = () => {
  return (
    <aside>
      <ul>
        <li className='active'>
          <a href=''>
            <HomeOutlined className='menu-icon' />
            <span>Accueil</span>
          </a>
        </li>
        <li>
          <a href=''>
            <FileAddOutlined className='menu-icon' />
            <span>Creer</span>
          </a>
        </li>
        <li>
          <a href=''>
            <SettingOutlined className='menu-icon' />
            <span>Parametres</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default AsideComponent;
