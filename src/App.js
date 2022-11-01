import { Routes, Route } from 'react-router-dom'
import Home from "./components/routes/home/home.component";
import Navigation from './components/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';
import Shop from './components/routes/shop/shop.component';


const Contact = () => {
  return (
    <div>
      <h1>i'm the contact page</h1>
    </div>
  );
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>

  );
}

export default App;