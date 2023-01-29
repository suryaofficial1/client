import React from "react";
import Slider from "../Slider/Slider";
import img1 from '../../images/3-1.jpg'
import img2 from '../../images/3-2.jpg'
import { Grid, makeStyles } from "@material-ui/core";
import ViewProductCard from "../Slider/ViewProductCard";

const useStyles = makeStyles((theme) => ({
    groomContainer: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0.7),
        }
    },
    viewProduct: {
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(5),
        }
    }

}));

const BridesWear = () => {
    const classes = useStyles();
    const sliderData = [
        {
            image: img1,
            heading: "LEHNGA SET'S",
            btnTitle:"Shop Now"
        },
        {
            image: img2,
            heading: "LEHNGA SET'S",
            btnTitle:"Shop Now"
        },
    ];
    const handleClick = (e, title) => {
        console.log("e ->", e + "title-.", title)
    }

    return (
        <Grid container spacing={2} className={classes.groomContainer}>
            <Grid item xs={12} md={4} className={classes.viewProduct}>

                <ViewProductCard title="BRIDE'S WEAR" submit={handleClick} btnTitle="View More" />
            </Grid>
            <Grid item xs={12} md={8}>
                <Slider sliderData={sliderData} />

            </Grid>
        </Grid>
    )
};

export default BridesWear;