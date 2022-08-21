import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Grid,Card,CardHeader,CardContent,Divider,makeStyles,
} from "@material-ui/core";
import * as math from 'mathjs'



const useStyles = makeStyles(theme => ({
    row: {
        margin:'5px',
    },
  
  
   
   
}));


const PercentFormatCustom = React.forwardRef(function PercentFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        suffix="%"
      />
    );
  });

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
     prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// monthTotal:'0',
// yearTotal:'',
// occupancy:'',
// months:'',
// caprate:'',

export default function FormattedInputs() {
    const classes = useStyles();
  const [values, setValues] = useState({
    noa:'',
   
  });
  
  const [rent, setRent] = useState(0);
  const [extra, setExtra] = useState(0);
  const [monthTotal, setMonthTotal] = useState(0);
  const [yearTotal, setYearTotal] = useState(0);
  const [occupancy, occupancyTotal] = useState(0.0);
  const [caprate, caprateTotal] = useState(0.0);


  useEffect(() => {
    let occtotal =   math.divide(occupancy,100)
    console.log(occtotal)
    let monthtotal = math.multiply(values.noa, rent)  
    let monthtotaloccupancy = math.multiply(occtotal,monthtotal)

    setMonthTotal(monthtotaloccupancy)  

    let yeartotal = math.multiply(monthtotal, 12) 

    let yeartaloccupancy = math.multiply(occtotal,yeartotal)

    setYearTotal(yeartaloccupancy)     

  }, [values.noa,rent,monthTotal,occupancy]);

  ////funcctions

  const handleNoa =  (event) => {
        setValues({...values,[event.target.name]: event.target.value,});
    };
  const handleOccupancy = (event) => {
        occupancyTotal(event.target.value)
    };
    const handleExtra = (event) => {
        setExtra(event.target.value)
    };
  const handleRent = (event) => {
     setRent(event.target.value)
    };

    const handleCapRate = (event) => {
        caprateTotal(event.target.value)
    }; 

  return (
 
        <Box
            sx={{
            alignItems: 'center',
             '& > :not(style)': { m: 1 },
            }}
        >
      <Grid container item spacing={2} columns={2}>
        <Grid item xs>
          <NumberFormat
                value={monthTotal}
                className="foo"
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                decimalScale={2}
                fixedDecimalScale={true}
                renderText={(value, props) => <div {...props}>Month Total: <b>{value}</b> </div>}
            />
            
              
        </Grid>
        <Grid item xs>
          <NumberFormat
                  value={yearTotal}
                  className="foo"
                  displayType={'text'}
                  thousandSeparator={true}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  prefix={'$'}
                  renderText={(value, props) => <div {...props}>Year Total: <b> {value} </b></div>}
              />
          </Grid>   
      </Grid>

      <FormControl variant="standard">
      <Grid container item spacing={4} columns={16} className={classes.row}>
            <Grid item xs >
                <TextField
                    type='number' 
                    label="# Apartments"
                    value={values.noa}
                    onChange={handleNoa}
                    name="noa"
                    variant="outlined" 
                    id="noa"
                />
            </Grid>
            <Grid item xs>
                <TextField
                    label="Rent"
                    value={rent}
                    onChange={handleRent}
                    name="rent"
                    variant="outlined" 
                    id="rent"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    
                />
          </Grid> 
         
        </Grid>
        <Divider />        
       <Grid container item spacing={3} columns={16} className={classes.row}>
       <Grid item xs>
                <TextField
                    label="Occupancy"
                    value={occupancy}
                    onChange={handleOccupancy}
                    name="occupancy"
                    variant="outlined" 
                    id="occupancy"
                    InputProps={{
                        inputComponent: PercentFormatCustom,
                    }}
                    
                />
            </Grid>
            <Grid item xs>
                <TextField
                    label="Extra Income"
                    value={extra}
                    onChange={handleExtra}
                    name="Extra"
                    variant="outlined" 
                    id="Extra"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    
                />
          </Grid> 
          
        </Grid> 
        <Divider />    
        <Grid container item spacing={3} columns={16} className={classes.row}>
       <Grid item xs>
                <TextField
                    label="Cap Rate"
                    value={caprate}
                    onChange={handleCapRate}
                    name="caprate"
                    variant="outlined" 
                    id="caprate"
                    InputProps={{
                        inputComponent: PercentFormatCustom,
                    }}
                    
                />
            </Grid>
           
          
        </Grid> 
      </FormControl>
   
    </Box>
             
  );
}
