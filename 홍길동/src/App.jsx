import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Sub from './page/Sub'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="sub" element={<Sub />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
