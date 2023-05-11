import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Construction from '../components/Construction/Construction';
import Service from '../components/Service/Service';
import Counter from '../components/Counter/Counter';
import Team from '../components/Team/Team';
import Project from '../components/Project/Project';
import Pricing from '../components/Pricing/Pricing';
import Testimonial from '../components/Testimonial/Testimonial';
import Blog from '../components/Blog/Blog';
import FQA from '../components/FQA/FQA';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>BUILDREAM | Home</title>
			</Helmet>
			<Banner />
			<About />
			<Construction />
			<Service />
			<Counter />
			<Team />
			<Project />
			<Pricing />
			<Testimonial />
			<Blog />
			<FQA />
		</>
	);
};

export default HomePage;
