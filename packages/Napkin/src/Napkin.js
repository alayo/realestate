import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
    makeStyles, 
    Button,
    Card, 
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    InputBase,
    Divider,
    Grid,
    CardHeader,
} from "@material-ui/core";
import GoogleMap from './AutoComplete';
import DealStepper from './Stepper'
import FormattedInputs from './Form';
import CreatedDeal from './CreatedDeal';
const useStyles = makeStyles(theme => ({
    container: {
        opacity: "90%",
        fontFamily: 'Open Sans, sans serif',
    },
    root: {
        margin: '10px',

    },
    grid: {
        margin: '20px',
        paddingLeft: '180px'
    },

    media: {
        height: 140,
    },
  
   
   
}));

const Napkin =()=>{
    const classes = useStyles();
    return(
        <div>
        <Card className={classes.root} >
        <CardHeader title="Napkin Deals" subheader="Search for Address" />
     
        <DealStepper/>
                <CardContent className={classes.grid} >
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs>
                            <GoogleMap/>
                        </Grid>
                        <Grid item xs>
                            <FormattedInputs/>
                        </Grid>
                        <Grid item xs>
                           <CreatedDeal/>
                        </Grid>
                    </Grid>
                    
                </CardContent>
           
            
        </Card>
        </div>
    )



}

export default Napkin;

