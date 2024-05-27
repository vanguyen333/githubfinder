// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import { Home, About, NotFound } from './pages';
// import { GithubProvider } from './context/github/GithubContext';
// import { AlertProvider } from './context/alert/AlertContext';
// import Alert from './components/layout/Alert';
// import User from './pages/User';
// function App() {
//   return (
//     <GithubProvider>
//       <AlertProvider>
//         <Router>
//           <div className="flex flex-col justify-between h-screen">
//             <Navbar />
//             <main className="container mx-auto px-3 pb-12">
//               <Alert />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/user/:login" element={<User />} />
//                 <Route path="/notfound" element={<NotFound />} />
//                 <Route path="/*" element={<NotFound />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </Router>
//       </AlertProvider>
//     </GithubProvider>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

// NOTE: Alert is only used on the '/' route moving to that route we can prevent
// content shift when alert shows by hiding and unhiding the Alert rather than
// conditionally rendering

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
