import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          {/* <HomeScreen /> */}
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
