import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Thumb,
  Info,
  Stats,
  Item,
  Label,
  Quantity,
  Name,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileWrap>
    <Description>
      <Thumb>
        <img src={avatar} alt={`${username} avatar`} />
      </Thumb>
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </Description>

    <Stats>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </Stats>
  </ProfileWrap>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
