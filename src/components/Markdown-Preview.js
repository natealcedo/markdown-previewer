import React from 'react';
import Marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

export default class MarkdownPreview extends React.Component {
	constructor() {
		super();

		Marked.setOptions({
			renderer: new Marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: true,
			pedantic: true,
			sanitize: true,
			smartLists: true,
			smartypants: true
		});
	}
	render() {
		let text = Marked(this.props.textValue);
		let buffer = ReactHtmlParser(text);
		return (
			<div className="markdown-preview" >
				{buffer}
			</div>
		);
	}
}