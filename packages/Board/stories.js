import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Adapter from 'enzyme-adapter-react-16';
import Board from './dist/index';
import { mount, configure } from 'enzyme';
import index from './src';


const { expect } = require('chai')


configure({ adapter: new Adapter() });

const stories = storiesOf('Board', module);

const confirm = (prop) => {
    alert('yea')
  }

const data= {
    label:"Tempature",
    color:"#ff0000",
    data:80

} 

stories.add('Board', () => {
  return (
    <div style={{ width: '100%' }}>
      <Board />
    </div>
  );
});