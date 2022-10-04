import { Box, Container, Grid, makeStyles } from '@material-ui/core';

ListPage.propTypes = {};

const useStyles=makeStyles(theme =>({
    root:{},

    left:{
        width:'250px'
    },

    right:{
        flex:'1 1 auto'
    },
}))

function ListPage(props) {
    const classes =useStyles();
    
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>Left column</Grid>
          <Grid item>Right column</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
