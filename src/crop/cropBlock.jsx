import React, {
  Component
} from 'react';
import CropBox from './cropBox.jsx';
import './crop.css';

class CropBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urlArr: this.props.imgArr ? this.props.imgArr : [],
			close: true,
			number: this.props.number ? this.props.number : ''
		}

		this.getUrl = this.getUrl.bind(this);
		this.addImg = this.addImg.bind(this);
		this.delImg = this.delImg.bind(this);
		this.getAllImg = this.getAllImg.bind(this);
	}

	getUrl(url) {
		let urlArr2 = this.state.urlArr;
		urlArr2.push(url);
		this.setState({
			urlArr: urlArr2,
			close: true
		})
		this.getAllImg(urlArr2);
	}

	addImg() {
		if(!this.state.number || (this.state.urlArr.length < this.state.number)) {
			this.setState({
				close: false
			})
		}
		else {
			alert("最多上传"+this.state.number+"张图片！");
		}
	}

	delImg(index) {
		if(window.confirm("你确定要删除改图片吗")) {
			let urlArr2 = this.state.urlArr;
			urlArr2.splice(index, 1);
			this.setState({
				urlArr: urlArr2,
				close: true
			})
			this.getAllImg(urlArr2);
		}
	}

	getAllImg(urlArr) {
		if(this.props.getAllImg) {
			this.props.getAllImg(urlArr);
		}
	}

	render() {
		let imgList = this.state.urlArr.map((src, index) =>
			<div key = {index} className="crop-img-block">
				<img alt = "图片" className = "crop-img" title = "删除" src = {src} onClick = {this.delImg.bind(this, index)} />
			</div>
		)
		return (
			<div className = "crop-block">
			   {imgList}
				<div className="crop-add-img" onClick = {this.addImg}>添加图片</div>
				<CropBox getUrl = {this.getUrl} close = {this.state.close}/>
			</div>
		)
	}
}

export default CropBlock;