import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import Members from './Members/Members';



function App() {
  return (
  
  <Router>
        <Routes>
          <Route exact path='/' element={<Form/>}/>
          <Route exact path='/members' element={<Members/>}/>
        </Routes>
 </Router>
   
  );
}

export default App;
