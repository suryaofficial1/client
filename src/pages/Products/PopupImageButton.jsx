import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Grid
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SizeChart from '../../images/SIzeChart.jpeg'

const  PopupImageButton =() =>{
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <Button onClick={() => setShowPopup(true)}>Size Chart</Button>
            <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
                <DialogTitle>
                    <Grid container justify="space-between">
                        <Grid item>Image</Grid>
                        <Grid item>
                            <IconButton
                                aria-label="close"
                                onClick={() => setShowPopup(false)}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <img
                        src={SizeChart}
                        alt="popup image"
                        style={{ width: "100%" }}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default PopupImageButton;