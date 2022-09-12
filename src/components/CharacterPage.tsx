import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { useCharacter } from '../hooks/useCharacter';
import { Character } from '../interfaces/reqRes';
import { useFetch } from '../hooks/useFetch';

const CharacterPage = () => {
  const id = Number(useParams().id);
  // const character = useCharacter(`/character/${id}`);
  const {
    data: character,
    loading,
    error,
  } = useFetch<Character | null>(`/character/${id}`, null);

  if (character === null) return <h2>Character not found</h2>;

  if (loading) return <h2>Loading...</h2>;

  if (error) console.log('ERROR:', error);

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
