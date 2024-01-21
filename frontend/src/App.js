import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import InterviewXps from './pages/InterviewXp/InterviewXps';
import Experience from './pages/Experience/Experience';
import AddInterviewXp from './pages/AddInterviewXp/AddInterviewXp';
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import Analysis from './pages/Analysis/Analysis';
// import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path='/experiences' element= {<InterviewXps/>}/>
        <Route path='/interviewXp/:id' element ={ <Experience/>}/>
        <Route path='/addxp' element ={ <AddInterviewXp/>}/>
        <Route path='/about' element ={ <About/>}/>
        <Route path='/admin' element ={ <Admin/>}/>
        <Route path='/analysis' element={<Analysis />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
