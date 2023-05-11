import React from 'react';
import Project from '../components/Project/Project';
import { Helmet } from 'react-helmet-async';

const ProjectsPage = () => {
	return (
		<>
			<Helmet>
				<title>BUILDREAM | Project</title>
			</Helmet>
			<Project />
		</>
	);
};

export default ProjectsPage;
