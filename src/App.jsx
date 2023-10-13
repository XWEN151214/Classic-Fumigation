import React from 'react';
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Navbar from './components/Navbar';
import Clients from './components/clients';
import Contact from './components/contact';
import BedBugTreatment from './components/services/bedBugTreatment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/media.css'
import { Route, Routes } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/services/bed-bug-treatment' element={<BedBugTreatment />} />
					<Route path='/clients' element={<Clients />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
