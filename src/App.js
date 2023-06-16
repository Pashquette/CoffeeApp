import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import OurCoffee from './pages/OurCoffee';
import ForYourPleasure from './pages/ForYourPleasure';
import CoffeeItemPage from './pages/CoffeeItemPage';

import ScrollToTop from './utils/scrollToTop';

import './styles/main.css';

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop/>
				<Navbar/>
				<Routes>
					<Route path="/CoffeeApp" element={<MainPage/>}/>
					<Route path="/coffee" element={<OurCoffee/>}/>
					<Route path="/pleasure" element={<ForYourPleasure/>}/>
					<Route path="/coffee/:id" element={<CoffeeItemPage/>}/>
				</Routes>
				<Footer/>
			</Router>
		</div>
  );
}



export default App;
