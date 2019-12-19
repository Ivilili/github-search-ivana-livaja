import React, { Component } from 'react';
import '../styles/Search.css';
import Profile from './Profile';

class Search extends Component {
	state = {
		search: '',
		user: ''
	};
	handleChange = (e) => {
		this.setState({
			search: e.target.value
		});
	};
	handleSubmit = (e) => {
		const { search } = this.state;
		this.setState({
			user: search
		});

		e.preventDefault();
	};
	render() {
		return (
			<React.Fragment>
				<form className="form" onSubmit={this.handleSubmit}>
					<div className="input-group">
						<input
							type="text"
							name="search"
							title="Search"
							placeholder="Search users..."
							className="form__input"
							onChange={this.handleChange}
							value={this.state.search}
						/>

						<button type="submit" className="form__button">
							Search
						</button>
					</div>
				</form>
				<Profile user={this.state.user} />
			</React.Fragment>
		);
	}
}

export default Search;
