import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
  loading: {
    
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
  const classes = useStyles();

  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress></LinearProgress>
      </Box>
    );
  }

  const handleAddToCartSubmit = (formValues) => {
    console.log('Form Submit', formValues);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product}></ProductThumbnail>
            </Grid>

            <Grid item className={classes.right}>
              <ProductInfo product={product}></ProductInfo>
              <AddToCartForm onSubmit={handleAddToCartSubmit}></AddToCartForm>
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu></ProductMenu>

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product}></ProductDescription>
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional}></Route>
          <Route path={`${url}/reviews`} component={ProductReviews}></Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
