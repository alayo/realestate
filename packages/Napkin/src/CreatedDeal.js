import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
    makeStyles, 
    Button,
    Card,
    Box, 
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    InputBase,
    Divider,
    Grid,
    CardHeader,
} from "@material-ui/core";


export default function CreatedDeal() {
    return (
      <Box sx={{ width: '100%' }}>
       <Card>
        <CardHeader title="Deals" subheader="Create Deal !!!" />
       </Card>
      </Box>
    );
  }


