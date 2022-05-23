import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Raymond</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path='/test' element={(
            <div>
              <h2>Test Page</h2>
              <p>Heyy!!</p>
            </div>
          )} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// 1) Switch Replaced with Routes
// 2) exact path not required now bcz its now the default behavior of version 6

// 3) Each Route element should have element prop where output should be the jsx component to which the path is directing 
// e.g           <Route path="/about" element={<About />} />

