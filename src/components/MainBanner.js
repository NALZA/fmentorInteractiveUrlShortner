import React from 'react';
import { ReactComponent as Illustration } from '../images/illustration-working.svg';

export default function MainBanner() {
	return (
		<div className='flex w-full m:flex-wrap '>
			<div className='d:mt-8 d:order-2 overflow-hidden d:overflow-visible'>
				<Illustration className='' />
			</div>
			<div className='flex flex-wrap text-center d:text-left py-5 justify-center d:justify-start d:order-1 d:w-5/12'>
				<h1 className=' text-darkViolet text-4xl d:text-7xl d:mt-36  font-bold leading-10'>
					More than just shorter links
				</h1>
				<div>
					<p className='d:w-9/12 text-grayishViolet text-lg'>
						Build your brand’s recognition and get detailed insights
						on how your links are performing.
					</p>
				</div>
				<div className='self-start w-max'>
					<button className='self-start bg-cyan p-3 px-8 font-bold text-white rounded-full hover:bg-opacity-75'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}
