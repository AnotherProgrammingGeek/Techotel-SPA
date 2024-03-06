import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CompanyProfile from './pages/CompanyProfile';
import ProductsAndServices from './pages/ProductsAndServices';
import Projects from './pages/Projects';
import Factory from './pages/Factory';
import ShowRoom from './pages/ShowRoom';
import ContactUs from './pages/ContactUs';
import Layout from './components/layout/Layout';

function App() {
  return (
    
    <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="companyprofile" element={<CompanyProfile/>}/>
        <Route path="productsandservices" element={<ProductsAndServices/>}/>
        <Route path='project' element={<Projects/>}/>
        <Route path='factory' element={<Factory/>}/>
        <Route path='showroom' element={<ShowRoom/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
      </Route>
    </Routes>
  );
}

export default App;
