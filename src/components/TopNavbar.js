import React, { useState } from 'react';
import { ReactComponent as Logo } from '../logo.svg';

export default function TopNavbar() {
	const [open, setOpen] = useState(false);
	return (
		<nav className='flex flex-wrap font-bold items-center'>
			<div className='flex items-center justify-between py-4 w-full'>
				<a href='/'>
					<Logo className='h-10 mr-2'></Logo>
				</a>
				<div className='flex-grow justify-items-flex-start text-grayishViolet hidden pb-2 d:flex'>
					<a
						className='px-5 hover:text-veryDarkViolet'
						href='#Features'
					>
						Features
					</a>
					<a
						className='px-5 hover:text-veryDarkViolet'
						href='#Pricing'
					>
						Pricing
					</a>
					<a
						className='px-5 hover:text-veryDarkViolet'
						href='#Resources'
					>
						Resources
					</a>
				</div>
				<div className='items-center text-grayishViolet justify-self-flex-end hidden d:flex'>
					<a
						className='px-5 hover:text-veryDarkViolet mr-4'
						href='#Login'
					>
						Login
					</a>
					<button className='bg-cyan w-full p-2 px-6 font-bold text-white rounded-full hover:bg-opacity-75'>
						Sign Up
					</button>
				</div>
				<div className='block d:hidden justify-self-flex-end'>
					<button
						className='focus:outline-none focus:shadow-outline'
						onClick={() => setOpen(!open)}
					>
						<svg
							className='h-7 w-7 fill-current text-grayishViolet'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
			</div>
			<div
				className={`flex flex-wrap justify-center d:hidden rounded bg-darkViolet rounded-lg w-full p-5 ${
					open ? 'flex' : 'hidden'
				}`}
			>
				<a
					className='flex justify-center w-full font-bold text-white p-5'
					href='#Features'
				>
					Features
				</a>
				<a
					className='flex justify-center w-full font-bold text-white p-5'
					href='#Pricing'
				>
					Pricing
				</a>
				<a
					className='flex justify-center w-full font-bold text-white p-5'
					href='#Resources'
				>
					Resources
				</a>
				<div className='flex flex-wrap justify-center w-10/12 font-bold text-white border-t border-white border-opacity-25 pb-8'>
					<a
						className='flex justify-center w-full font-bold text-white pt-6 p-5'
						href='#Login'
					>
						Login
					</a>
					<button className='bg-cyan w-full p-3 rounded-full '>
						Sign Up
					</button>
				</div>
			</div>
		</nav>

		/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#Features'>Features</Nav.Link>
					<Nav.Link href='#Pricing'>Pricing</Nav.Link>
					<Nav.Link href='#Resources'>Resources</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href='#Login'>Login</Nav.Link>
					<Button variant='primary'>Sign Up</Button>
				</Nav>
			</Navbar.Collapse> */
	);
}
