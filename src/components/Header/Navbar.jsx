import React, { useState } from 'react';
import './Header.css';
import './../../style.css';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	const [showMenu, setMenu] = useState(false);
	let NavLinkActive = 'NavLinkActive';

	return (
		<div className=' bg-gray-700 overflow-hidden'>
			<div className='w-full container flex justify-between mx-auto items-center'>
				<div>
					<h1 className='uppercase text-gray-700 text-xl logo py-8 px-3 z-50 font-bold'>
						Buildream
					</h1>
				</div>
				<button
					onClick={() => setMenu(!showMenu)}
					className='flex items-center ml-4 md:hidden text-white  bg-transparent border-0 px-3'>
					<BiMenu className='text-2xl' />
					<span className='ml-1 uppercase'>Menu</span>
				</button>
				<div
					className={`${
						showMenu ? '' : 'hidden md:block'
					} fixed z-50 md:static bg-gray-700 md:bg-transparent left-0 top-[124px] md:top-0  w-full md:w-full`}>
					<ul className=' list-none flex flex-col md:flex-row items-start md:items-center justify-end pe-5 gap-4'>
						<li>
							<NavLink
								to='/'
								onClick={() => setMenu(!showMenu)}
								className={({ isActive }) =>
									isActive
										? `${NavLinkActive} relative font-medium text-sm  px-4 py-8 text-gray-900 uppercase block`
										: 'px-4 py-8 text-sm text-gray-400 font-medium uppercase block'
								}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='about'
								onClick={() => setMenu(!showMenu)}
								className={({ isActive }) =>
									isActive
										? `${NavLinkActive} relative font-medium text-sm px-4 py-8 text-gray-900 uppercase block`
										: 'px-4 py-8 text-sm text-gray-400 font-medium uppercase block'
								}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to='services'
								onClick={() => setMenu(!showMenu)}
								className={({ isActive }) =>
									isActive
										? `${NavLinkActive} relative font-medium text-sm px-4 py-8 text-gray-900 uppercase block`
										: 'px-4 py-8 text-sm text-gray-400 font-medium uppercase block'
								}>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to='projects'
								onClick={() => setMenu(!showMenu)}
								className={({ isActive }) =>
									isActive
										? `${NavLinkActive} relative font-medium text-sm px-4 py-8 text-gray-900 uppercase block`
										: 'px-4 py-8 text-sm text-gray-400 font-medium uppercase block'
								}>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink
								to='pricing'
								onClick={() => setMenu(!showMenu)}
								className={({ isActive }) =>
									isActive
										? `${NavLinkActive} relative font-medium text-sm px-4 py-8 text-gray-900 uppercase block`
										: 'px-4 py-8 text-sm text-gray-400 font-medium uppercase block'
								}>
								Price
							</NavLink>
						</li>
						<li>
							<NavLink
								to='blogs'
								onClick={() => setMenu(!showMenu)}
								className={({ isActive }) =>
									isActive
										? `${NavLinkActive} relative font-medium text-sm px-4 py-8 text-gray-900 uppercase block`
										: 'px-4 py-8 text-sm text-gray-400 font-medium uppercase block'
								}>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink
								to='contact'
								onClick={() => setMenu(!showMenu)}
								className={({ isActive }) =>
									isActive
										? `${NavLinkActive} relative font-medium text-sm px-4 py-8 text-gray-900 uppercase block`
										: 'px-4 py-8 text-sm text-gray-400 font-medium uppercase block'
								}>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
