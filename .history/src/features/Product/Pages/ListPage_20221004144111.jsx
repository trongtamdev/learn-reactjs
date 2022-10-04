import { Box, Container, Grid } from '@material-ui/core';

ListPage.propTypes = {};

const useStyles

function ListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item>Left column</Grid>
          <Grid item>Right column</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
