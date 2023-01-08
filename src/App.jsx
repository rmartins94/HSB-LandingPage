import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
//import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Contact" exact component={Contact} />
				<Route path="/pricing" exact component={Pricing} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
