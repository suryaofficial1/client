import { Divider, FormControl, FormControlLabel, Grid, Hidden, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Products = (props) => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('');
  // const [price, setPrice] = useState('');
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

const onInputChange =(e)=>{
  setSort(e.target.value)
}
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const filters = () => {
    return <Grid container style={{ boxShadow : 5 , padding: 10,boxShadow: "rgb(201 200 205) 9px 1px 1px 1px"}}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom> Filter</Typography>
      </Grid>
      <Grid item xs={12}> <Divider light style={{marginTop : 10}}/>
        <Typography variant="h5">Product Categories</Typography>
      </Grid>
      <Grid item xs={12}>
        {data && data?.map((item) => (<><input
          type="checkbox"
          id={item.id}
          value={item.id}
          onChange={handleChange}
        />
          <label htmlFor={item.id}>{item?.attributes?.title}</label>
        </>
        ))}
      </Grid>
      <Grid item xs={12}> <Divider light style={{marginTop : 10}}/>
        <Typography variant="h5">Filter by price</Typography>
      </Grid>
      <Grid item xs={12}>
        <div style={{ padding: 3, width: "40%", height: 30, background: "#f1f3f6", boxShadow: "hwb(0deg 80% 13%) 0px 2px 4px 0px", borderRadius: "4%", marginBottom: -5, marginTop: 10 }}><center>$0</center></div>
        <input
          type="range"
          min={0}
          max={1000}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <div style={{ padding: 3, width: "40%", height: 30, background: "#f1f3f6", boxShadow: "0 2px 4px 0 hsl(0deg 0% 100% / 50%)", borderRadius: "4%", marginTop: -13 }}><center>${maxPrice}</center></div>
      </Grid>
      
      <Grid item xs={12}><Divider light style={{marginTop : 10}}/>
        <Typography gutterBottom variant="h5">Sort by</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* <input
          type="radio"
          id="asc"
          value="asc"
          name="price"
          onChange={(e) => setSort("asc")}
        />
        <label htmlFor="asc">Price (Lowest first)</label> */}
        {/* <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="none"
          name="radio-buttons-group"
        >
          <FormControlLabel value="asc" control={<Radio onClick={(e) => setSort("asc")} />} label="Price (Lowest first)" />
          <FormControlLabel value="desc" control={<Radio onClick={(e) => setSort("desc")} />} label="Price (Highest first)" />
        </RadioGroup> */}
        <FormControl component="fieldset" name="method-of-payment" >
          <RadioGroup onClick={(e) => {onInputChange(e, 'radio') }} value={sort}>

            <FormControlLabel value="asc" control={<Radio size="small" />} label="Price (Lowest first)" />
            <FormControlLabel value="desc" control={<Radio size="small" />} label="Price (Highest first)"/>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h5"> <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} /></Typography>
      </Grid>
      <Grid item sm={12} align="right">
      <Button variant="contained" color="primary"
       onClick={() => props.applyFilter(sort)}
       >Apply</Button>
      </Grid>
    </Grid>
  }

  return (<>
      <Hidden only="xs">
        {filters()}
      </Hidden>
      <Hidden smUp>
        <Dialog
          open={props.open}
          keepMounted
          onClose={props.handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Filter</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {filters()}
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={props.handleClose}>Apply</Button>
          </DialogActions> */}
        </Dialog>
      </Hidden >
      </>
  );
};

export default Products;



