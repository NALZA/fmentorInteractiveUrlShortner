import React, { useState } from 'react';

export default function LinkShortner() {
	const [link, setLink] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className=' bg-darkViolet bg-shorten-mobile d:bg-shorten-desktop bg-no-repeat bg-right-top rounded-md'>
			<form
				className='flex flex-wrap justify-center px-5 py-5 d:space-x-6'
				onSubmit={handleSubmit}
			>
				<input
					className='my-4 rounded-md p-2 w-full d:w-9/12'
					placeholder='Shorten a link here...'
					type='text'
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
				<button
					className='bg-cyan my-4 p-3 w-full rounded-md font-bold text-white d:w-2/12 hover:bg-opacity-75'
					onClick={() => handleSubmit}
				>
					Shorten it!
				</button>
			</form>
		</div>
		// <CardGroup>
		// 	<Card>
		// 		<Container>
		// 			<Form.Group className='my-3'>
		// 				<Row className='mx-4 align-items-center'>
		// 					<Col lg={9} className='align-self-center'>
		// 						<Form.Control
		// 							size='lg'
		// 							type='text'
		// 							placeholder='Shorten a link here...'
		// 						/>
		// 					</Col>
		// 					<Col lg={3} className='px-auto '>
		// 						<Button
		// 							variant='primary'
		// 							size='lg'
		// 							className='px-5 justify-self-center'
		// 						>
		// 							Shorten It!
		// 						</Button>
		// 					</Col>
		// 				</Row>
		// 			</Form.Group>
		// 		</Container>
		// 	</Card>
		// </CardGroup>
	);
}
