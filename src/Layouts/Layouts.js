import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';

const Layouts = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layouts;
