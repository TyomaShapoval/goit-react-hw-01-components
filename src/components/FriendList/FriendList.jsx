import React from 'react';
import style from './FriendList.module.css';
import PropTypes from "prop-types"




const FriendList = ({ friends }) => {
  return (
    <ul className={style[`friend-list`]}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        const statusClass = isOnline ? style.online : style.offline;
        return (
        <li className="friend-item" key={id}>
      <span className={statusClass}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
      )})}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default FriendList;
