import { Box, Container, Grid } from '@material-ui/core';

ListPage.propTypes = {};

function ListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container s>
          <Grid item>Left column</Grid>
          <Grid item>Right column</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;