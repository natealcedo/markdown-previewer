import React from 'react';

export default class MarkdownText extends React.Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
		this.updateTextValue = this.updateTextValue.bind(this);
	}
	updateTextValue() {
		this.setState({
			text: this.text.value
		});
		this.props.updateTextValue(this.text.value);
	}
	render() {
		return (
			<div className="markdown-text">
				<h2>Markdown</h2>
				<textarea rows="" cols="" onChange={this.updateTextValue} ref={ref => this.text = ref} />
			</div>
		);
	}
}