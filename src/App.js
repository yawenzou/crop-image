import React, {
  Component
} from 'react';
import CropBlock from './crop/cropBlock.jsx';

class App extends Component {

  render() {
    return (
      <CropBlock number = {5}/>
    );
  }
}

export default App;