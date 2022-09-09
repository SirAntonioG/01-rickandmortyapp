import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCharacter } from '../hooks/useCharacter';

const CharacterPage = () => {
  const id = Number(useParams().id);
  const character = useCharacter(`/character/${id}`);
  console.log('character', character);

  const origin = character.origin.name;
  const location = character.location.name;
  const iconColor: string =
    character.status === 'Alive'
      ? 'green'
      : character.status === 'Dead'
      ? 'red'
      : 'gray';

  return (
    <Box
      sx={{
        backgroundColor: '#202329',
        color: '#FFFFFF',
        padding: '50px',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={character.image}
            alt={character.name}
            className='img-data-character'
          />
          <Typography
            variant='h4'
            sx={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}
          >
            {character.name}
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontWeight: '600', fontSize: '20px', textAlign: 'center' }}
          >
            <CircleIcon
              sx={{ color: `${iconColor}`, fontSize: 10 }}
            ></CircleIcon>{' '}
            {character.status} - {character.species} <br />
            {character.gender} <br />
            {'origin'}
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} /> {origin} <br />
            {'location '}
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} /> {location} <br />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CharacterPage;
