import React from 'react';
import '../sass/App.sass';
import Preview from './Markdown-Preview';
import Text from './Markdown-Text';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
		this.updateTextValue = this.updateTextValue.bind(this);
	}
	updateTextValue(value){
		this.setState({
			text: value
		});
	}
	render() {
		return (
			<div>
				<nav className="nav">
					<h1>Markdown Previewer</h1>
				</nav>
				<div className="container">
					<Text updateTextValue={this.updateTextValue}/>
					<Preview textValue={this.state.text}/>
				</div>
			</div>
		);
	}
}