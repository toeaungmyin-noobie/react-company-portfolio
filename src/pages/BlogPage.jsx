import React from 'react';
import Blog from '../components/Blog/Blog';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
	return (
		<>
			<Helmet>
				<title>BUILDREAM | Blogs</title>
			</Helmet>
			<Blog />
		</>
	);
};

export default BlogPage;
