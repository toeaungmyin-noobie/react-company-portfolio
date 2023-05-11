import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Construction from '../components/Construction/Construction';
import Counter from '../components/Counter/Counter';
import Team from '../components/Team/Team';
import Testimonial from '../components/Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
	return (
		<>
			<Helmet>
				<title>BUILDREAM | About</title>
			</Helmet>
			<Banner />
			<About />
			<Construction />
			<Team />
			<Counter />
			<Testimonial />
		</>
	);
};

export default AboutPage;
