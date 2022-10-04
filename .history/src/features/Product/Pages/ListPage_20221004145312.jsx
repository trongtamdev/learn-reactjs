import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            Left column
            <Paper elevation={0}>

            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0} />
            Right column
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
