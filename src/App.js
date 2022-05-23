import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [cartIsEmpty] = useState(false)
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
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path='/test' element={(
            <div>
              <h2>Test Page</h2>
              <p>Heyy!!</p>
            </div>
          )} />
          <Route path='/redirect' element={<Navigate to="/about" />} />
          <Route
            path='/checkout'
            element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>}
          />
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

// 4) We can also display direct jsx inside element={()} for desired path 
// 5) Redirect component is replaced with Navigate component
// 6) useNavigate hook to programatically navigate user to particular page
// e.g       <button onClick={() => navigate('/products')}>See our Products</button>

// 7)Nested Route paths are now relative to parent route paths
// i.e we dont need path="about/offers" we can just add path="offers" in about page and path="about/*" in app.js


