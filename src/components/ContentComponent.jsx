import {
  CommentOutlined,
  LikeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import card_img from "../assets/images/card-img.png";
import avatar from "../assets/images/avatar.png";
import React from "react";
import { Avatar } from "antd";
import { peoples } from "../data/data";

const ContentComponent = () => {
  return (
    <div className='content'>
      <div className='header'>
        <div className='research-bar'>
          <SearchOutlined />
          <input type='text' placeholder='Rechercher...' />
        </div>
        <ul className='type-menu'>
          <li className='active'>Recents</li>
          <li>Scientifiques</li>
          <li>Populaires</li>
          <li>Phylosope</li>
          <li>Jeux</li>
          <li>Films & TV</li>
        </ul>
      </div>
      <div className='list-cards'>
        {peoples.map((item) => {
          return (
            <div className='card-item' key={item.id}>
              <img src={item.image} alt='card image' />
              <h2>{item.name}</h2>
              <p>{item.title}</p>
              <div className='actions'>
                <div className='left'>
                  <img src={avatar} />
                  <span>@{item.user.toLocaleLowerCase()}</span>
                </div>
                <div className='right'>
                  <div className='reaction like'>
                    <LikeOutlined />
                    <span>{item.like}</span>
                  </div>
                  <div className='reaction comment'>
                    <CommentOutlined />
                    <span>{item.comment}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentComponent;
