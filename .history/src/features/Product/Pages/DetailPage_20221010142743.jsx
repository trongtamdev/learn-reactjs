import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail';

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
    // pagination: {
    //   display: 'flex',
    //   flexFlow: 'row nowrap',
    //   justifyContent: 'center',
      
    //   marginTop: '30px',
    //   paddingBottom: '20px',
    // },
  }));

function DetailPage(props) {
    const classes=useStyles();


    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            Thumbnail
                            <ProductThumbnail></ProductThumbnail>
                        </Grid>

                        <Grid item className={classes.right}>
                            Product Info
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;