import { Box, Container, Grid } from '@material-ui/core';

ListPage.propTypes = {};

function ListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item>Left column</Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
