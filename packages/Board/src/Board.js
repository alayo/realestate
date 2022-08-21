import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
    makeStyles, 
    Button,
    Card, 
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    InputBase
} from "@material-ui/core";
import Board from "@asseinfo/react-kanban";
import './style.css'





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
  
}));

const KBoard =()=>{
    const board = {
        columns: [
          {
            id: 1,
            title: "Pipeline",
            cards: [
              {
                id: 1,
                title: "Card title 1",
                description: "Card content"
              },
              {
                id: 2,
                title: "Card title 2",
                description: "Card content"
              },
              {
                id: 3,
                title: "Card title 3",
                description: "Card content"
              }
            ]
          },
          {
            id: 2,
            title: "Underwriting",
            cards: [
              {
                id: 9,
                title: "Card title 9",
                description: "Card content"
              }
            ]
          },
          {
            id: 3,
            title: "LOI",
            cards: [
              {
                id: 10,
                title: "Card title 10",
                description: "Card content"
              },
              {
                id: 11,
                title: "Card title 11",
                description: "Card content"
              }
            ]
          },
          {
            id: 4,
            title: "Won",
            cards: [
              {
                id: 12,
                title: "Card title 12",
                description: "Card content"
              },
              {
                id: 13,
                title: "Card title 13",
                description: "Card content"
              }
            ]
          },
          {
            id: 5,
            title: "Lost",
            cards: [
              {
                id: 12,
                title: "Card title 12",
                description: "Card content"
              },
              {
                id: 13,
                title: "Card title 13",
                description: "Card content"
              }
            ]
          },
         
        ]
    };
    const classes = useStyles();
    console.log(board)
    const [controlledBoard, setBoard] = useState(board);
    
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }
    return(
        <Board initialBoard={board}/>
    
    )



}

export default KBoard;