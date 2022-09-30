import { Box, Grid, Container } from '@mui/material';
import CharacterCard from './CharacterCard';
import { useFetch } from '../hooks/useFetch';
import { ReqResCharacters } from '../interfaces/reqRes';

const Characters = () => {
  const {
    data: characters,
    loading,
    error,
  } = useFetch<ReqResCharacters | null>(`/character`, null);

  console.log('characters', characters, 'loading', loading);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h3>{error}</h3>;

  if (!characters) {
    return <></>;
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
      <Container>
        <Grid container spacing={4}>
          {characters.results.map((character) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                key={character.id.toString()}
              >
                <CharacterCard character={character} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Characters;
