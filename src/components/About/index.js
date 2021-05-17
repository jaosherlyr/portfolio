import { Component } from "react";
import './about.scss';

class About extends Component {
	componentDidMount() {
		window.scrollTo({ top: 0 });
	}
	
	render() {
		const { offset: o } = this.props;
		const offset = o.header + o.footer + o.margin;
		
		return <div
			className={ 'About' }
			style={ {
				minHeight: `calc(100vh - ${ offset }px)`
			} }>
			<div className="wrapper">
				<div className="banner text-shadow-white">About me</div>
				<div className="content">
					<h1>I am <span className='gold'>Sherly R. Jao</span>, I will be a <span className="gold">Software Engineer</span>.</h1>
					<p>
						I was born in Minglanilla, Cebu and was raised in the City of Naga down south and living in Lapu-Lapu City
					</p>
					<p>
						Since I was young, I wanted to follow my father and become a Software Engineer
					</p>
					<p>
						As of now I have few artworks commissioned and I seek to incorporate my artistic skills to my future potential web development career.
					</p>
					<p>
						and I am ARMY!
					</p>
				</div>
			</div>
		</div>
	}
}

export default About;
