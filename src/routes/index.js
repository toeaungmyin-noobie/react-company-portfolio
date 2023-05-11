import React from 'react';
import { useRoutes } from 'react-router';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ProjectsPage from '../pages/ProjectsPage';
import PricingPage from '../pages/PricingPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import Layouts from '../Layouts/Layouts';

const Router = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Layouts />,
			children: [
				{
					element: <HomePage />,
					index: true,
				},
				{
					path: 'about',
					element: <AboutPage />,
				},
				{
					path: 'services',
					element: <ServicesPage />,
				},
				{
					path: 'projects',
					element: <ProjectsPage />,
				},
				{
					path: 'pricing',
					element: <PricingPage />,
				},
				{
					path: 'blogs',
					element: <BlogPage />,
				},
				{
					path: 'contact',
					element: <ContactPage />,
				},
				{
					path: '*',
					element: <NotFoundPage />,
				},
			],
		},
	]);

	return routes;
};

export default Router;
