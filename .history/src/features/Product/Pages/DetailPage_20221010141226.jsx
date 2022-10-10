import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@material-ui/core';

DetailPage.propTypes = {
    
};

function DetailPage(props) {
    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item></Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;