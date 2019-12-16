import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import * as serviceWorker from './serviceWorker';

import App from './App.js';
require('dotenv').config();

//apollo docs
const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	//const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
		}
	};
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
