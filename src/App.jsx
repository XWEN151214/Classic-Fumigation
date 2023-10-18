import React from 'react';
import Home from "./components/home";
import About from "./components/about";
import Navbar from './components/Navbar';
import Clients from './components/clients';
import Contact from './components/contact';
import BedBugTreatment from './components/services/bedBugTreatment';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'bootstrap/js/dist/carousel'
import 'font-awesome/css/font-awesome.min.css';
import './css/media.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Route, Routes } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
	useState(
				()=>
				{
					AOS.init();
					AOS.refresh();
				}
			)
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
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
