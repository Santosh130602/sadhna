// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from "./components/header"
// import Footer from "./components/footer"
// import Home from './pages/home';
// import About from './pages/about';
// import Causes from './pages/causes';
// import Events from './pages/events';
// import ContactUs from './pages/contact';
// import SochPage from './eventpages/soch';
// import BhavPage from './eventpages/bhav';
// import GyanPage from './eventpages/gyan';
// import TarkPage from './eventpages/tark';
// import MitrPage from './eventpages/mitr';
// import SatyPage from './eventpages/saty';
// import Signup from './pages/signup';
// import Login from './pages/login';
// import UpcomingEventsPage from './banners/upcommingEvent';
// import PaymentForm from './banners/payment';
// import Member from './pages/members';
// import Donate from './pages/donate';
// import Profile from './components/profile';
// import Gallery from './pages/gallery';
// import TransactionDetails from './banners/printTransition';
// // import EventsBanner from './banners/eventsBanner';
// import TermsAndConditions from './components/termsandCondition';
// import PrivacyPolicy from './components/privatepolicy';
// import PreHeader from './components/preHeader';


// function App() {
//   return (

//     <Router>
//       <PreHeader/>
//       <Header/>

//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cause" element={<Causes/>}/>
//           <Route path="/contact" element={<ContactUs/>}/>
//           <Route path="/donate" element={<Donate/>}/>
//           <Route path="/events" element={<Events/>}/>
//           <Route path="/gallery" element={<Gallery/>}/>
//           <Route path="/member" element={<Member/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/events-soch" element={<SochPage/>}/>
//           <Route path="/events-bhav" element={<BhavPage/>}/>
//           <Route path="/events-gyan" element={<GyanPage/>}/>
//           <Route path="/events-tark" element={<TarkPage/>}/>
//           <Route path="/events-mitr" element={<MitrPage/>}/>
//           <Route path="/events-saty" element={<SatyPage/>}/>
//           <Route path="/upcomming-event" element={<UpcomingEventsPage/>}/>
//           <Route path="/payment" element={<PaymentForm/>}/>
//           <Route path="/profile" element={<Profile/>}/>
//           <Route path="/transaction/:merchantTransactionId" element={<TransactionDetails />} />
//           <Route path="/terms" element={<TermsAndConditions/>}/>
//           <Route path="/privacy" element={<PrivacyPolicy/>}/>


         
//         </Routes>
//       </div>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from "./components/header"
// import Footer from "./components/footer"
// import Home from './pages/home';
// import About from './pages/about';
// import Causes from './pages/causes';
// import Events from './pages/events';
// import ContactUs from './pages/contact';
// import SochPage from './eventpages/soch';
// import BhavPage from './eventpages/bhav';
// import GyanPage from './eventpages/gyan';
// import TarkPage from './eventpages/tark';
// import MitrPage from './eventpages/mitr';
// import SatyPage from './eventpages/saty';
// import Signup from './pages/signup';
// import Login from './pages/login';
// import UpcomingEventsPage from './banners/upcommingEvent';
// import PaymentForm from './banners/payment';
// import Member from './pages/members';
// import Donate from './pages/donate';
// import Profile from './components/profile';
// import Gallery from './pages/gallery';
// import TransactionDetails from './banners/printTransition';
// import TermsAndConditions from './components/termsandCondition';
// import PrivacyPolicy from './components/privatepolicy';
// import PreHeader from './components/preHeader';
// // import AdminPanel from './admin/AdminPanel'; // Import your admin panel component
// import Admin from './components/Admin';

// function App() {
//   const userRole = localStorage.getItem('userRole'); // Assume userRole is stored in local storage

//   return (
//     <Router>
//       <PreHeader/>
//       <Header/>

//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cause" element={<Causes/>}/>
//           <Route path="/contact" element={<ContactUs/>}/>
//           <Route path="/donate" element={<Donate/>}/>
//           <Route path="/events" element={<Events/>}/>
//           <Route path="/gallery" element={<Gallery/>}/>
//           <Route path="/member" element={<Member/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/events-soch" element={<SochPage/>}/>
//           <Route path="/events-bhav" element={<BhavPage/>}/>
//           <Route path="/events-gyan" element={<GyanPage/>}/>
//           <Route path="/events-tark" element={<TarkPage/>}/>
//           <Route path="/events-mitr" element={<MitrPage/>}/>
//           <Route path="/events-saty" element={<SatyPage/>}/>
//           <Route path="/upcomming-event" element={<UpcomingEventsPage/>}/>
//           <Route path="/payment" element={<PaymentForm/>}/>
//           <Route path="/profile" element={<Profile/>}/>
//           <Route path="/transaction/:merchantTransactionId" element={<TransactionDetails />} />
//           <Route path="/terms" element={<TermsAndConditions/>}/>
//           <Route path="/privacy" element={<PrivacyPolicy/>}/>
          
//           {/* Admin Panel Route */}
//           {userRole === 'admin' ? (
//             <Route path="/admin" element={<Admin />} />
//           ) : (
//             <Route path="/admin" element={<Navigate to="/" replace />} /> // Redirect to home if not admin
//           )}
//         </Routes>
//       </div>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;



// // ./App.js
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Home from './pages/home';
// import About from './pages/about';
// import Causes from './pages/causes';
// import Events from './pages/events';
// import ContactUs from './pages/contact';
// import SochPage from './eventpages/soch';
// import BhavPage from './eventpages/bhav';
// import GyanPage from './eventpages/gyan';
// import TarkPage from './eventpages/tark';
// import MitrPage from './eventpages/mitr';
// import SatyPage from './eventpages/saty';
// import Signup from './pages/signup';
// import Login from './pages/login';
// import UpcomingEventsPage from './banners/upcommingEvent';
// import PaymentForm from './banners/payment';
// import Member from './pages/members';
// import Donate from './pages/donate';
// import Profile from './components/profile';
// import Gallery from './pages/gallery';
// import TransactionDetails from './banners/printTransition';
// import TermsAndConditions from './components/termsandCondition';
// import PrivacyPolicy from './components/privatepolicy';
// import PreHeader from './components/preHeader';
// import Admin from './components/Admin';
// import AdminPanel from './admin/AdminDashbord';
// import Visitor from './pages/visitor';

// function App() {
//   const userRole = localStorage.getItem('isAdmin'); 

//   return (
//     <Router>
//       <PreHeader/>
//       <Header/>

//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cause" element={<Causes/>}/>
//           <Route path="/contact" element={<ContactUs/>}/>
//           <Route path="/donate" element={<Donate/>}/>
//           <Route path="/events" element={<Events/>}/>
//           <Route path="/Visitor" element={<Visitor/>}/>
//           <Route path="/gallery" element={<Gallery/>}/>
//           <Route path="/member" element={<Member/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/events-soch" element={<SochPage/>}/>
//           <Route path="/events-bhav" element={<BhavPage/>}/>
//           <Route path="/events-gyan" element={<GyanPage/>}/>
//           <Route path="/events-tark" element={<TarkPage/>}/>
//           <Route path="/events-mitr" element={<MitrPage/>}/>
//           <Route path="/events-saty" element={<SatyPage/>}/>
//           <Route path="/upcomming-event" element={<UpcomingEventsPage/>}/>
//           <Route path="/payment" element={<PaymentForm/>}/>
//           <Route path="/profile" element={<Profile/>}/>
//           <Route path="/transaction/:merchantTransactionId" element={<TransactionDetails />} />
//           <Route path="/terms" element={<TermsAndConditions/>}/>
//           <Route path="/privacy" element={<PrivacyPolicy/>}/>
//           <Route path="/admin-dashbord" element={<AdminPanel/>} />

//           {/* Admin Panel Route */}
//           {/* <Route
//             path="/admin"
//             element={userRole === 'admin' ? <Admin /> : <Navigate to="/" replace />} 
//           /> */}
//         </Routes>
//       </div>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;






import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/home';
import About from './pages/about';
import Causes from './pages/legalAdvisor';
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
import VayamProgram from './pages/vayamProgram';
import Profile from './components/profile';
import Gallery from './pages/gallery';
import TransactionDetails from './banners/printTransition';
import TermsAndConditions from './components/termsandCondition';
import PrivacyPolicy from './components/privatepolicy';
import PreHeader from './components/preHeader';
import AdminPanel from './admin/AdminDashbord';
import Visitor from './pages/visitor';
import PageNotFound from './pages/pageNotFound';
import OurProject from './pages/ourProject';
import LegalAdvisor from './pages/legalAdvisor';
import InternshipProgram from './pages/internshipProgram';
import JoinUs from './pages/joinUs';
import VayamForm from './components/vayamForm';
import InternshipForm from './components/internshipForm';
import VayamPaymentForm from './components/vayamPayment';

function App() {
  const userRole = localStorage.getItem('isAdmin'); 

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
          <Route path="/vayam-program" element={<VayamProgram/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/visitor" element={<Visitor/>}/>
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
          <Route path="/admin-dashbord-kutumb" element={<AdminPanel/>} />
          <Route path="/our-project" element={<OurProject/>} />
          <Route path="/legal-advisor" element={<LegalAdvisor/>}/>
          <Route path="/internship-program" element={<InternshipProgram/>}/>
          <Route path="/join-us" element={<JoinUs/>}/>
          <Route path="/vayam-form" element={<VayamForm/>}/>
          <Route path="/internship-form" element={<InternshipForm/>}/>
          <Route path="/vayam-payment" element={<VayamPaymentForm/>}/>
          
          
          {/* Catch-all route for 404 Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
