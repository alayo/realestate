import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { withStyles } from '@material-ui/core/styles';


const styles = {
    button: {
        color: '#FFF',
        width: 200,
        height: 40,
        marginTop: 25,
        marginBottom: 20,
        fontWeight: 600,
        textTransform: 'none',
        borderRadius: 5,
        background: 'linear-gradient(135deg, #F15C22 0%, #F58220 100%)'
      },
      buttonLabel: {
        height: 28,
      }
 };
class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
            series: [{
                name: 'sales',
                data: [30,40,35,50,49,60,70,91,125]
              }],
            options: {
              chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                  enabled: true,
                  easing: 'linear',
                  dynamicAnimation: {
                    speed: 1000
                  }
                },
                toolbar: {
                  show: false
                },
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Test',
                align: 'left'
              },
              markers: {
                size: 0
              },
              xaxis: {
                categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
              },
              yaxis: {
                max: 100
              },
              legend: {
                show: false
              },
            },
          
          
          };
        }

    
   
 
    

    render() {
        
   
      return (
        <div className="Holder">
        
          <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height="280"
            />
         
           
          </div> 
     );
    }
  }

  export default withStyles(styles, {index: 99999})(LineChart);