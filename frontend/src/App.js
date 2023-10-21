import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import InterviewXp from './pages/InterviewXp/InterviewXp';
import Experience from './pages/Experience/Experience';
import AddInterviewXp from './pages/AddInterviewXp/AddInterviewXp';
// import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path='/experiences' element= {<InterviewXp/>}/>
        <Route path='/interviewxp' element ={ <Experience/>}/>
        <Route path='/addxp' element ={ <AddInterviewXp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
