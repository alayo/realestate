# @xdealflow/core



## Installation

Modify your .npmrc file to have the correct registry and authentication

Install the package in your project directory with:

```sh
// with npm
npm install @xdealflow/core

// with yarn
yarn add @xdealflow/core
```

Add in custom theme with MuiThemeProvider in your root App.js file
```jsx
import { MuiThemeProvider } from '@material-ui/core/styles';
import xdealflowTheme from '@xdealflow/core/Theme';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={xdealflowTheme}>
        /** Your components here **/
      </MuiThemeProvider>
    );
  }
}

export default App;
```


## Usage

Import components like you would any other React component

```js
/** Footer Component **/
import Footer from '@xdealflow/core/Footer';
```


## Packages

#### Calendar

React-Big-Calendar component styled and designed for maintenance cases
```js
import Calendar from '@xdealflow/core/Calendar';
```

#### Eyebrow

Eyebrow component styled and designed for the top of the xdealflow.com homepage
```js
import Eyebrow from '@xdealflow/core/Eyebrow';
```

#### ExpandCard

Expandable Card component with large image
```js
import ExpandCard from '@xdealflow/core/ExpandCard';
```

#### FiberMap

Esri Map component, built to display interactable fiber for Shop-by-Location page
```js
import FiberMap from '@xdealflow/core/FiberMap';
```

#### FiberStats

Large FiberStats component for homepage
```js
import FiberStats from '@xdealflow/core/FiberStats';
```

#### Footer

Large Footer component
```js
import Footer from '@xdealflow/core/Footer';
```

#### GhostNav

Main navigation for xdealflow.com homepage
```js
import GhostNav from '@xdealflow/core/GhostNav';
```

#### HeaderBar

Custom gradient AppBar component, built for use as a page navigation
```js
import HeaderBar from '@xdealflow/core/HeaderBar';
```

#### Input

Basic input component with multiple design options. See: [@xdealflow/Input](./Input)
```js
import Input from '@xdealflow/core/Input';
```

#### LeafletMap

Leaflet map component styled and designed for maintenance cases
```js
import LeafletMap from '@xdealflow/core/LeafletMap';
```

#### Login

Login component styled and designed for xdealflow.com login page
```js
import Login from '@xdealflow/core/Login';
```

#### Modal

Basic Modal component
```js
import Modal from '@xdealflow/core/Modal';
```

#### xdealflowTheme

Material-UI Theme for @xdealflow/core components
```js
import xdealflowTheme from '@xdealflow/core/Theme';
```
