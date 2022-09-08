import { Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  const iconColor =
    character.status === 'Alive'
      ? 'green'
      : character.status === 'Dead'
      ? 'red'
      : 'gray';
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'left',
        gap: '1em',
        alignItems: 'center',
        backgroundColor: '#3c3e44',
        borderRadius: '15px',
      }}
    >
      <img src={character.image} alt={character.name} className='img-card' />
      <Box
        sx={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          gap: '2em',
          backgroundColor: '#3c3e44',
          borderRadius: '15px',
        }}
      >
        <p>
          <Link to={`character/${character.id}`}>{character.name}</Link> <br />
          <CircleIcon
            sx={{ color: `${iconColor}`, fontSize: 10 }}
          ></CircleIcon>{' '}
          {character.status} - {character.species}
        </p>
        <p>
          Last know location: <br />
          <a href={character.location.url}>{character.location.name}</a>
        </p>
        <p>
          First seen in: <br /> name_chapter
        </p>
      </Box>
    </Box>
  );
};

export default CharacterCard;
