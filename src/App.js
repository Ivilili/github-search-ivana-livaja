import React from 'react';

import './styles/App.css';
import Search from './components/Search';

function App({ user, value, handleSubmit, handleChange }) {
	return (
		<div className="App">
			<img src="https://i.postimg.cc/fRtjq5Zx/iconmonstr-github-1-240.png" alt="github icon" className="hero" />
			<h1 className="title">GitHub Search</h1>
			<Search value={value} onChange={handleChange} handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
