import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  console.log();
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};
