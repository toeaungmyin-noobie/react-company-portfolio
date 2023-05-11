import React from 'react';
import FQA from '../components/FQA/FQA';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
	return (
		<>
			<Helmet>
				<title>BUILDREAM | Blogs</title>
			</Helmet>
			<FQA />
		</>
	);
};

export default ContactPage;
