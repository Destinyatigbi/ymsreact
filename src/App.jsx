import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Service from "./pages/Service.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Productpage from "./pages/Productpage.jsx"
import ProductPreview from "./pages/ProductPreview.jsx"


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    <Route path="/service" element={<Service />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/productpage" element={<Productpage />} />
      <Route path="/productpreview" element={<ProductPreview/>} />

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
