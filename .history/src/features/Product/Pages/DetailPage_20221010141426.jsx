import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';

DetailPage.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {},
  
    left: {
      width: '250px',
    },
  
    right: {
      flex: '1 1 0',
    },
    pagination: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      
      marginTop: '30px',
      paddingBottom: '20px',
    },
  }));

function DetailPage(props) {
    const classes=useStyles();


    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className></Grid>
                        <Grid item></Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;