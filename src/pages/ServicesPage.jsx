import React from 'react';
import Service from '../components/Service/Service';
import Banner from '../components/Banner/Banner';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
	return (
		<>
			<Helmet>
				<title>BUILDREAM | Service</title>
			</Helmet>
			<Banner />
			<Service />
		</>
	);
};

export default ServicesPage;
