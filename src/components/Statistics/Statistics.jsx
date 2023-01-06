import PropTypes from 'prop-types';
import { List, Item, Section, Title, Lable, Percentage } from './Statistics.styled';
import { getRandomHexColor } from 'utils/GetRandomColor';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Lable>{label}</Lable>
            <Percentage>{percentage}&#37;</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
