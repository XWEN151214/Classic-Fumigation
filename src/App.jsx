import React from 'react';
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
import Clients from './components/clients';
import Contact from './components/contact';
=======
// import Clients from './components/clients';
// import Contact from './components/contact';
import BedBugTreatment from './components/services/bedBugTreatment';
>>>>>>> Stashed changes
import Footer from './components/footer';
import BedBugTreatment from './components/services/bedBugTreatment';
import CarpetCleaning from './components/services/carpetCleaning';
import CoakroachControl from './components/services/coakroachControl';
import Disinfection from './components/services/disinfection';
import Fumigation from './components/services/fumigation';
import MosquitoSpray from './components/services/mosquitoSpray';
import RodentControl from './components/services/rodentControl';
import PestControl from './components/services/pestControl';
import SofaCleaning from './components/services/sofaCleaning';
import TermiteControl from './components/services/termiteControl';
import 'bootstrap/dist/css/bootstrap.min.css';
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
<<<<<<< Updated upstream
					<Route path='/clients' element={<Clients />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/services/bed-bug-treatment' element={<BedBugTreatment />} />
					<Route path='/services/coakroaches-control-services' element={<CoakroachControl />} />
					<Route path='/services/disinfection-services' element={<Disinfection />} />
					<Route path='/services/fumigation-services' element={<Fumigation />} />
					<Route path='/services/mosquito-spray-service' element={<MosquitoSpray />} />
					<Route path='/services/pest-control' element={<PestControl />} />
					<Route path='/services/rodent-control' element={<RodentControl />} />
					<Route path='/services/sofa-cleaning-services' element={<SofaCleaning />} />
					<Route path='/services/carpet-cleaning-services' element={<CarpetCleaning />} />
					<Route path='/services/termite-control' element={<TermiteControl />} />
=======
					<Route path='/services/bed-bug-treatment' element={<BedBugTreatment />} />
					{/* <Route path='/clients' element={<Clients />} /> */}
					{/* <Route path='/contact' element={<Contact />} /> */}
>>>>>>> Stashed changes
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
