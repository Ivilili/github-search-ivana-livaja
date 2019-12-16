import React from 'react';
import { FaBook } from 'react-icons/fa';

const RepositoryList = ({ repositories }) =>
	repositories.edges.map((e) => {
		return (
			<ul key={e.node.id} className="list">
				<li className="list-item-title">
					{' '}
					<FaBook className="icon" /> {e.node.name}
				</li>
				<li className="list-item">{e.node.description}</li>
				<li className="list-item-link">
					<a href={e.node.url} target="_blank" rel="noopener noreferrer">
						{e.node.url}
					</a>
				</li>
			</ul>
		);
	});

export default RepositoryList;
