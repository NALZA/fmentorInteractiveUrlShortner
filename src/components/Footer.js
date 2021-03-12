import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as Iconfacebook } from '../images/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '../images/icon-twitter.svg';

export default function Footer() {
	return (
		<Row className='footer'>
			<Col>
				<h2 href='#home'>Shortly</h2>
				<Iconfacebook />
			</Col>
			<Col>
				<Row>
					<h3>Features</h3>
				</Row>
				<Row>
					<a href='#LinkShortning'>Link Shortning</a>
				</Row>
				<Row>
					<a href='#BrandedLinks'>Branded Links</a>
				</Row>
				<Row>
					<a href='#Analytics'>Analytics</a>
				</Row>
			</Col>
			<Col>
				<Row>
					<h3>Resources</h3>
				</Row>
				<Row>
					<a href='#Blog'>Blog</a>
				</Row>
				<Row>
					<a href='#Developers'>Developers</a>
				</Row>
				<Row>
					<a href='#Support'>Support</a>
				</Row>
			</Col>
			<Col>
				<Row>
					<h3>Resources</h3>
				</Row>
				<Row>
					<a href='#About'>About</a>
				</Row>
				<Row>
					<a href='#OurTeam'>Our Team</a>
				</Row>
				<Row>
					<a href='#Careers'>Careers</a>
				</Row>
				<Row>
					<a href='#Contact'>Contact</a>
				</Row>
			</Col>
			<Col>
				<Col>
					<Iconfacebook />
				</Col>
				<Col>
					<IconTwitter />
				</Col>
				<Col></Col>
				<Col></Col>
			</Col>
		</Row>
	);
}
