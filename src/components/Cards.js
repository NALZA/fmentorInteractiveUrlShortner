import React from 'react';
import { ReactComponent as Brand } from '../images/icon-brand-recognition.svg';
import { ReactComponent as Customizable } from '../images/icon-fully-customizable.svg';
import { ReactComponent as Detailed } from '../images/icon-detailed-records.svg';

export default function InfoCards() {
	return (
		<div className='flex flex-col d:flex-row mt-10 m:space-y-16 d:space-y-0  d:justify-between'>
			<div className='flex m:justify-center relative bg-white rounded h-56  w-full d:w-3/12 rounded-md'>
				<div className='absolute flex p-5 bg-darkViolet rounded-full d:left-4 -top-10'>
					<Brand />
				</div>
				<div className='p-3'>
					<h3 className='text-center text-darkViolet w-full text-2xl mt-12 font-bold leading-10'>
						Brand Recognition
					</h3>
					<p className='text-center text-darkViolet pb-4'>
						Boost your brand recognition with each click. Generic
						links don’t mean a thing. Branded links help instil
						confidence in your content.
					</p>
				</div>
			</div>
			<div className='flex m:justify-center relative bg-white rounded h-56 d:mt-10 w-full d:w-3/12 rounded-md'>
				<div className='absolute flex p-5 bg-darkViolet rounded-full d:left-4 -top-10'>
					<Detailed />
				</div>
				<div className='p-3'>
					<h3 className='text-center text-darkViolet w-full text-2xl mt-12 font-bold leading-10'>
						Detailed Records
					</h3>
					<p className='text-center text-darkViolet pb-4'>
						Gain insights into who is clicking your links. Knowing
						when and where people engage with your content helps
						inform better decisions.
					</p>
				</div>
			</div>
			<div className='flex m:justify-center relative bg-white rounded h-56  w-full d:w-3/12 rounded-md'>
				<div className='absolute flex p-5 bg-darkViolet rounded-full d:left-4 -top-10'>
					<Customizable />
				</div>
				<div className='p-3'>
					<h3 className='text-center text-darkViolet w-full text-2xl mt-12 font-bold leading-10'>
						Fully Customizable
					</h3>
					<p className='text-center text-darkViolet pb-4'>
						Improve brand awareness and content discoverability
						through customizable links, supercharging audience
						engagement.
					</p>
				</div>
			</div>
		</div>
		// <CardDeck>
		// 	<Card>
		// 		<Card.Title>Brand Recognition</Card.Title>
		// 		<Card.Text>
		// 			Boost your brand recognition with each click. Generic links
		// 			don’t mean a thing. Branded links help instil confidence in
		// 			your content.
		// 		</Card.Text>
		// 	</Card>
		// 	<Card>
		// 		<Card.Title>Detailed Records</Card.Title>
		// 		<Card.Text>
		// 			Gain insights into who is clicking your links. Knowing when
		// 			and where people engage with your content helps inform
		// 			better decisions.
		// 		</Card.Text>
		// 	</Card>
		// 	<Card>
		// 		<Card.Title>Fully Customizable</Card.Title>
		// 		<Card.Text>
		// 			Improve brand awareness and content discoverability through
		// 			customizable links, supercharging audience engagement.
		// 		</Card.Text>
		// 	</Card>
		// </CardDeck>
	);
}
