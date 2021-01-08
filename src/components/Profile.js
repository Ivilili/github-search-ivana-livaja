import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { FaEnvelope, FaUserAlt, FaGithub } from 'react-icons/fa';

import RepositoryList from './RepositoryList';

import '../styles/Profile.css';

const GET_USER = gql`
	query($user: String!) {
		user(login: $user) {
			id
			avatarUrl
			login
			url
			email
			repositories(last: 100) {
				edges {
					node {
						id
						name
						description
						url
					}
				}
			}
		}
	}
`;

const Profile = ({ user }) => (
	<div>
		<Query query={GET_USER} variables={{ user }}>
			{({ loading, data }) => (
				<React.Fragment>
					{loading && <div className="loader" />}

					{data &&
					data.user && (
						<div className="card">
							<div className="profile">
								<img src={data.user.avatarUrl} alt={data.user.login} className="card-img" />
								<p>
									<FaUserAlt className="icon" /> {data.user.login}
								</p>
								<p>
									<FaEnvelope className="icon" />
									{data.user.email ? data.user.email : 'No email available'}
								</p>
								<p>
									<FaGithub className="icon" /> <a href={data.user.url}>{data.user.url} </a>
								</p>
							</div>
							<RepositoryList repositories={data.user.repositories} />
						</div>
					)}
				</React.Fragment>
			)}
		</Query>
	</div>
);

export default Profile;
