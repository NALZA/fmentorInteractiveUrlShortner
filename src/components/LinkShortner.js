import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LinkShortner() {
	return (
		<CardGroup>
			<Card>
				<Form.Group>
					<Form.Control
						size='lg'
						type='text'
						placeholder='Shorten a link here...'
					/>
					<Button variant='primary'>Shorten It!</Button>
				</Form.Group>
			</Card>
		</CardGroup>
	);
}
