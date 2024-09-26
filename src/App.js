import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Home from './pages/home';
import About from './pages/about';
import Causes from './pages/causes';
import Events from './pages/events';
import ContactUs from './pages/contact';
import SochPage from './eventpages/soch';
import BhavPage from './eventpages/bhav';
import GyanPage from './eventpages/gyan';
import TarkPage from './eventpages/tark';
import MitrPage from './eventpages/mitr';
import SatyPage from './eventpages/saty';
import Signup from './pages/signup';
import Login from './pages/login';
import UpcomingEventsPage from './banners/upcommingEvent';
import PaymentForm from './banners/payment';
import Member from './pages/members';
import Donate from './pages/donate';
import Profile from './components/profile';
import Gallery from './pages/gallery';
import TransactionDetails from './banners/printTransition';
// import EventsBanner from './banners/eventsBanner';
import TermsAndConditions from './components/termsandCondition';
import PrivacyPolicy from './components/privatepolicy';
import PreHeader from './components/preHeader';


function App() {
  return (

    <Router>
      <PreHeader/>
      <Header/>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cause" element={<Causes/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/member" element={<Member/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/events-soch" element={<SochPage/>}/>
          <Route path="/events-bhav" element={<BhavPage/>}/>
          <Route path="/events-gyan" element={<GyanPage/>}/>
          <Route path="/events-tark" element={<TarkPage/>}/>
          <Route path="/events-mitr" element={<MitrPage/>}/>
          <Route path="/events-saty" element={<SatyPage/>}/>
          <Route path="/upcomming-event" element={<UpcomingEventsPage/>}/>
          <Route path="/payment" element={<PaymentForm/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/transaction/:merchantTransactionId" element={<TransactionDetails />} />
          <Route path="/terms" element={<TermsAndConditions/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>


         
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
