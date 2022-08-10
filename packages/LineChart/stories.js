import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Adapter from 'enzyme-adapter-react-16';
import LineChart from './dist/index';
import { mount, configure } from 'enzyme';



const { expect } = require('chai')


configure({ adapter: new Adapter() });

const stories = storiesOf('LineChart', module);


const data= [5, 5, 10, 8, 7, 5, 4, 10, 10, 5, 10, 10, 7, 8, 6, 9]



stories.add('LineChart', () => {
  return (
    <div style={{ width: '100%' }}>
      <LineChart label={data}/>
    </div>
  );
});