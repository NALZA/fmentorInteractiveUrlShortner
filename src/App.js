//import './App.css';
import './App.css';

import TopNavbar from './components/TopNavbar';
import MainBanner from './components/MainBanner';
import LinkShortner from './components/LinkShortner';
import Cards from './components/Cards';
// import InfoCards from './components/InfoCards';
// import { Row, Col, Container, Button } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App font-sans'>
			<header className='App-header '>
				<div className='p-6 d:mx-32'>
					<TopNavbar />
					<MainBanner />
					<LinkShortner />
					<div className=''>
						<h2 className='text-center text-darkViolet text-3xl mt-28  font-bold leading-10'>
							Advanced Statistics
						</h2>
					</div>
					<div className='flex justify-center'>
						<p className='text-center text-gray mt-2 mb-9 d:w-5/12'>
							Track how your links are performing across the web
							with our advanced statistics dashboard.
						</p>
					</div>
					<Cards />
				</div>
				<div className='flex flex-col justify-center  text-center bg-darkViolet bg-boost-mobile d:bg-boost-desktop bg-no-repeat bg-right-top mt-20 w-full'>
					<p className='text-center text-white text-4xl font-bold leading-10 p-12'>
						Boost your links today
					</p>
					<button className='self-center bg-cyan p-3 px-8 font-bold text-white w-2/12 mb-16 rounded-full hover:bg-opacity-75'>
						Get Started
					</button>
					<Footer />
				</div>
			</header>
		</div>
	);
}

export default App;
