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




#### Footer

Large Footer component
```js
import Footer from '@xdealflow/core/Footer';
```



```

#### Input

Basic input component with multiple design options. See: [@xdealflow/Input](./Input)
```js
import Input from '@xdealflow/core/Input';
```






#### xdealflowTheme

Material-UI Theme for @xdealflow/core components
```js
import xdealflowTheme from '@xdealflow/core/Theme';
```
