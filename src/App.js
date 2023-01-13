import Header from './components/Header';
import Footer from './components/Footer';
import ResturentList from './components/ResturentList';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewRestuarent from './components/ViewRestuarent';
function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
       <Header/>
       <Routes>
       <Route path='/' element={ <ResturentList/> } />
       <Route path='/viewrestuarent/:id' element={ <ViewRestuarent/> } />

       </Routes>
       
       <Footer/>
      </header>
      </Router>
      
    </div>
  );
}

export default App;
