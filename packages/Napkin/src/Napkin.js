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
    CardHeader,
} from "@material-ui/core";
import GoogleMap from './AutoComplete';
import DealStepper from './Stepper'
const useStyles = makeStyles(theme => ({
    container: {
        opacity: "90%",
        fontFamily: 'Rajdhani, sans serif',
    },
    root: {
        margin: '10px 7px'
    },
    media: {
        height: 140,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: 5,
        '&:hover': {
          opacity: 0.7,
        },
        maxWidth: 345,
        width: '95%',
        marginLeft: 10,
        background: '#E3E5E4'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'sticky',
        top: 20,
        left: 40,
        background: '#e3e5e4',
        color: '#696969',
        borderRadius: 20,
        fontSize: 13,
        boxShadow: '0px 2px 2px gray',
        padding: '6px 18px', 
        textTransform: 'uppercase',
        textDecoration: 'none',
        '&:hover': {
            background: '#797D83',
            color: 'white'
        },
    }
}));

const Napkin =()=>{
    const classes = useStyles();
    return(
        <div>
        <Card className={classes.root} >
        <CardHeader title="Napkin Deals" subheader="Search for Address" />
        <DealStepper/>
                <CardContent>
                     <Typography component={'span'} variant="body2" color="textSecondary" >
                        <GoogleMap/>
                    </Typography>
                </CardContent>
           
            
        </Card>
        </div>
    )



}

export default Napkin;

