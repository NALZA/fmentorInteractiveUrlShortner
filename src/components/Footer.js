import React from 'react';
import { ReactComponent as Iconfacebook } from '../images/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '../images/icon-twitter.svg';
import { ReactComponent as IconPintrest } from '../images/icon-pinterest.svg';
import { ReactComponent as IconInstagram } from '../images/icon-instagram.svg';

export default function Footer() {
	return (
		<div className='flex flex-col d:flex-row d:pt-10 bg-veryDarkViolet text-gray pb-24'>
			<div className=' flex-grow p-10 d:p-0 text-white'>
				<h1 className='text-3xl font-bold'>Shortly</h1>
			</div>
			<div className='flex-grow pb-5'>
				<ul>
					<li className='font-bold text-white pb-2'>Features</li>
					<li>Link Shortning</li>
					<li>Branded Links</li>
					<li>Analytics</li>
				</ul>
			</div>
			<div className='flex-grow pb-5'>
				<ul>
					<li className='font-bold text-white pb-2'>Resources</li>
					<li>Blog</li>
					<li>Developers</li>
					<li>Support</li>
				</ul>
			</div>
			<div className='flex-grow pb-8'>
				<ul>
					<li className='font-bold text-white pb-2'>Company</li>
					<li>About</li>
					<li>Our Team</li>
					<li>Careers</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className=' flex-grow flex space-x-6 justify-center'>
				<Iconfacebook />
				<IconTwitter />
				<IconPintrest />
				<IconInstagram />
			</div>
		</div>
		// <Row className='justify-content-md-center footer'>
		// 	<Col s lg='2'>
		// 		<h2 href='#home'>Shortly</h2>
		// 		<Iconfacebook />
		// 	</Col>
		// 	<Col xs lg='2'>
		// 		<Row>
		// 			<h6>Features</h6>
		// 		</Row>
		// 		<Row>
		// 			<a href='#LinkShortning'>Link Shortning</a>
		// 		</Row>
		// 		<Row>
		// 			<a href='#BrandedLinks'>Branded Links</a>
		// 		</Row>
		// 		<Row>
		// 			<a href='#Analytics'>Analytics</a>
		// 		</Row>
		// 	</Col>
		// 	<Col xs lg='2'>
		// 		<Row>
		// 			<h6>Resources</h6>
		// 		</Row>
		// 		<Row>
		// 			<a href='#Blog'>Blog</a>
		// 		</Row>
		// 		<Row>
		// 			<a href='#Developers'>Developers</a>
		// 		</Row>
		// 		<Row>
		// 			<a href='#Support'>Support</a>
		// 		</Row>
		// 	</Col>
		// 	<Col xs lg='2'>
		// 		<Row>
		// 			<h6>Resources</h6>
		// 		</Row>
		// 		<Row>
		// 			<a href='#About'>About</a>
		// 		</Row>
		// 		<Row>
		// 			<a href='#OurTeam'>Our Team</a>
		// 		</Row>
		// 		<Row>
		// 			<a href='#Careers'>Careers</a>
		// 		</Row>
		// 		<Row>
		// 			<a href='#Contact'>Contact</a>
		// 		</Row>
		// 	</Col>
		// 	<Col xs lg='2'>
		// 		<Col>
		// 			<Iconfacebook />
		// 		</Col>
		// 		<Col>
		// 			<IconTwitter />
		// 		</Col>
		// 		<Col></Col>
		// 		<Col></Col>
		// 	</Col>
		// </Row>
	);
}
