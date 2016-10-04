'use strict'
import React from 'react';

class UserGithub extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : '',
			githubURL : '',
			avatarURL : ''
		};
	}
	componentDidMount() {
		$.get(this.props.source, (result) => {
			console.log(result);
			const data = result;
			if(data) {
				this.setState({
					userName : data.name,
					githubURL : data.html_url,
					avatarURL : data.avatar_url
				});
			}

		});
	};

	render() {
		return (
			<div>
				<h3>{this.state.userName}</h3>
				<img src = {this.state.avatarURL}/>
				<a href = {this.state.githubURL}>GitHub Link</a>
			</div>
		)
	};
}

export default UserGithub;
