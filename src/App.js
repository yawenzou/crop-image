import React, {
	Component
} from 'react';
import CropBlock from './crop/cropBlock.jsx';

class App extends Component {

	render() {
		return (
			<CropBlock number = {5} aspectRatio = {1/1} url = '/manage/manager/upload.do' uploadData = {{"type": 'item'}} urlArr = {[]} />
		);
	}
}

export default App;