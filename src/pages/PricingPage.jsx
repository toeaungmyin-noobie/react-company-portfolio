import React from 'react';
import About from '../components/About/About';
import Pricing from '../components/Pricing/Pricing';
import { Helmet } from 'react-helmet-async';

const PricingPage = () => {
	return (
		<>
			<Helmet>
				<title>BUILDREAM | Pricing</title>
			</Helmet>
			<Pricing />
			<About />
		</>
	);
};

export default PricingPage;
