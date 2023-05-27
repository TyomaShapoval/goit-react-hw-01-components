import React from 'react';
import Profile from './profile/Profile';
import Statistics from './Statistics/Statistics';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import user from './profile/user.json';
import data from './Statistics/data.json';

const App = () => {
  return ( 
    <>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>; 
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
</>)
};

export default App;





