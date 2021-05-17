import { Component } from 'react';
import './home.scss';
import imgOne from './profile1.jpg';
import imgTwo from './profile2.jpg';
import imgThree from './profile3.png';
import imgFour from './profile4.png';
import imgFive from './profile5.jpeg';
import imgSix from './profile6.png';
import imgSeven from './profile7.png';

class Home extends Component {
	state = {
		imageIndex: 0,
		imageOpacity: 0
	}
	
	imageArray = [ imgTwo, imgOne, imgThree, imgFour, imgFive, imgSix, imgSeven ];
	
	componentDidMount() {
		let idxs = [],
			timeout = 49;
		
		const rotateImgIndex = () => {
			const { imageIndex } = this.state;
			let nextIndex = imageIndex + 1;
			if (nextIndex === this.imageArray.length) nextIndex = 0;
			
			setTimeout(() => {
				this.setState({
					imageIndex: nextIndex
				});
				
				if (idxs.length !== this.imageArray.length) {
					if (!idxs.includes(imageIndex)) idxs.push(imageIndex);
					console.log('idxs:', idxs);
				} else {
					timeout = 14000;
					this.setState({ imageOpacity: 1});
				}
				rotateImgIndex();
			}, timeout);
		}
		rotateImgIndex();
	}
	
	render() {
		const { imageIndex, imageOpacity } = this.state;
		
		return <div className="Home">
			<h2 title="Greetings" className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</h2>
			<div className="profile-image" style={ {
				backgroundImage: `url(${this.imageArray[ imageIndex ]})`,
				opacity: imageOpacity
			} } />
			<div className="profile-description">
				<div className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</div>
				<h1 className="name gold">Sherly Jao</h1>
				<p>
					I am 17 years of age and am a student of STEM-Micron.
				</p>
				<p>
					I have a talent for creativity and I am quick to learn. I'm good at arts, and have a hidden gift for solving puzzles.
				</p>
				<p>
					I may not have a 20/20 eyesight but I have a 200/200 attendance at school.
				</p>
			</div>
		</div>
	}
}

export default Home;
