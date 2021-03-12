import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function TopNavbar() {
	return (
		<Navbar expand='lg'>
			<Navbar.Brand href='#home'>Shortly</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
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
			</Navbar.Collapse>
		</Navbar>
	);
}
