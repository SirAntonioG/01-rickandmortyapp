import { Box, Grid } from '@mui/material';
import CharacterCard from './CharacterCard';
// import { useAllCharacters } from '../hooks/useAllCharacters';
import { useFetch } from '../hooks/useFetch';
import { ReqResCharacters } from '../interfaces/reqRes';

const Characters = () => {
  // const charactersAux = useAllCharacters(`/character`);
  const charactersAux = useFetch<ReqResCharacters | null>(`/character`, null);

  if (charactersAux === null) {
    return <div>Vacio</div>;
  }

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
        {charactersAux.results.map((character) => {
          return (
            <Grid item xs={12} sm={12} key={character.id.toString()}>
              <CharacterCard character={character} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Characters;
