import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import About from "../pages/_About";
import Products from "../pages/_Products";
import Contact from "../pages/_Contact";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}