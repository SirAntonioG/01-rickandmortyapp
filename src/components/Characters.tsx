import { Box, Grid } from '@mui/material';
import CharacterCard from './CharacterCard';
import { useFetch } from '../hooks/useFetch';

const Characters = () => {
  const charactersAux = useFetch(`/character`);
  return (
    <Box
      sx={{
        margin: 0,
        padding: '5% 0',
        backgroundColor: '#202329',
        color: '#FFFFFF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2em',
      }}
    >
      <Grid container spacing={2}>
        {charactersAux.map((character) => {
          return (
            <Grid item xs={12} sm={12}>
              <CharacterCard key={character.id} character={character} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Characters;
