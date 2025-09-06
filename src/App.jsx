
import './App.css';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import SignUP from './Components/SignUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Product Listing components</h1>
        } />
        <Route path="/add" element={<h1>Add Product Component </h1>
        } />
        <Route path="/Update" element={<h1>Update Product Component </h1>
        } />
        <Route path="/Logout" element={<h1>Logout</h1>
        } />
        <Route path="/Profile" element={<h1>Profile Component </h1>
        } />
        <Route path="/SignUp" element={ <SignUP /> }/>
      </Routes>
      
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
