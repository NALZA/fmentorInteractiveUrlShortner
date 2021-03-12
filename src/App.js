//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavbar from './components/TopNavbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import LinkShortner from './components/LinkShortner';
import InfoCards from './components/InfoCards';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Container className='px-4'>
					<TopNavbar />
					<Jumbotron>
						<h1>More than just shorter links</h1>
						<p>
							Build your brand’s recognition and get detailed
							insights on how your links are performing.
						</p>
						<p>
							<Button variant='primary'>Get Started</Button>
						</p>
					</Jumbotron>
					<LinkShortner />
					<h1>Advanced Statistics</h1>
					<p>
						Track how your links are performing across the web with
						our advanced statistics dashboard.
					</p>
					<InfoCards />
				</Container>
				<Jumbotron>
					<h1>Boost your links today</h1>
					<p>
						<Button variant='primary'>Get Started</Button>
					</p>
				</Jumbotron>
				<Footer />
			</header>
		</div>
	);
}

export default App;
