import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import "./AllProducts.scss";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import { Button, Grid, Hidden } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { makeRequest } from "../../makeRequest";


const AllProducts = ({ type }) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [filter, setFilter] = React.useState({ sort: '', price:'' });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  
  const fetchAllProduct = async ()=>{
    try {
      setLoading(true);
      let url = filter.sort != '' ? `/products?populate=*&sort=price:${filter.sort}`:`/products?populate=*&`
      // await makeRequest.get(`/products?populate=*&sort=price:${sort}`).then((_res) => {
      await makeRequest.get(url).then((_res) => {
        if (_res.status === 200) {
          setLoading(false);
          setData(_res.data.data);
          setPage(1)
        }
      })
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

   useEffect(()=>{
    fetchAllProduct()
 
   }, [page, filter]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const applyFilter = (sort) => {
      setFilter({ ...filter, sort: sort })
      setPage(0)
      setOpen(false);
  }
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <Grid container spacing={2}>

        <Hidden smUp>
          <Button variant="outlined" onClick={handleClickOpen}>
            <FilterListIcon />
          </Button>
        </Hidden>
        <Grid item md={3}>
          <Products open={open} applyFilter={applyFilter} handleClose={handleClose} />
        </Grid>
        <Grid item md={9}>
          <div className="bottom">
            {error
              ? "Something went wrong!"
              : loading
                ? "loading"
                : data?.length > 0 ? data?.map((item) => <Card item={item} key={item.id} />) : ''}
          </div>
        </Grid>
      </Grid>

    </div>
  );
};

export default AllProducts;
