import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default function InfoCards() {
	return (
		<CardDeck>
			<Card>
				<Card.Title>Brand Recognition</Card.Title>
				<Card.Text>
					Boost your brand recognition with each click. Generic links
					don’t mean a thing. Branded links help instil confidence in
					your content.
				</Card.Text>
			</Card>
			<Card>
				<Card.Title>Detailed Records</Card.Title>
				<Card.Text>
					Gain insights into who is clicking your links. Knowing when
					and where people engage with your content helps inform
					better decisions.
				</Card.Text>
			</Card>
			<Card>
				<Card.Title>Fully Customizable</Card.Title>
				<Card.Text>
					Improve brand awareness and content discoverability through
					customizable links, supercharging audience engagement.
				</Card.Text>
			</Card>
		</CardDeck>
	);
}
