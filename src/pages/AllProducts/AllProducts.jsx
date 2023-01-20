import React from "react";
import Card from "../../components/Card/Card";
import "./AllProducts.scss";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import { Button, Grid, Hidden } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';


const AllProducts = ({ type }) => {
  const [open, setOpen] = React.useState(false);

  const { data, loading, error } = useFetch(
    `/products?populate=*`
  );
  
  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     try{
  //       const res = await axios.get(process.env.REACT_APP_API_URL + "/products?populate" ,
  //       {
  //         headers: {
  //           Authorization:"bearer " + process.env.REACT_APP_API_TOKEN,
  //         },
  //       });
  //       // console.log(data)
  //       setData(res.data.data)
  //     }
  //     catch{
  //       console.log(error)
  //     }
  //   };
  //   fetchData();
  // }, []);

  // console.log(data)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          <Products open={open} handleClose={handleClose} />
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
