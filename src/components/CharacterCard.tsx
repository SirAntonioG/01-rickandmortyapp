import { Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { Character } from '../interfaces/reqRes';

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
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
        gap: '1em',
        alignItems: 'center',
        backgroundColor: '#3c3e44',
        borderRadius: '15px',
      }}
      className='card-box'
    >
      <img src={character.image} alt={character.name} className='img-card' />
      <Box
        sx={{
          maxWidth: '45%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          backgroundColor: '#3c3e44',
          borderRadius: '15px',
          padding: '0.8rem',
        }}
        className='card-box-text'
      >
        <h4>
          <Link to={`character/${character.id}`}>{character.name}</Link> <br />
          <CircleIcon
            sx={{ color: `${iconColor}`, fontSize: 10 }}
          ></CircleIcon>{' '}
          {character.status} - {character.species}
        </h4>
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
