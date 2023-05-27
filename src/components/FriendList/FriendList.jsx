import React from 'react';
import style from './FriendList.module.css';
import PropTypes from "prop-types"


const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? style.online : style.offline;

  return (
    <li className="friend-item">
      <span className={statusClass}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={style[`friend-list`]}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.array,
  };

export default FriendList;
