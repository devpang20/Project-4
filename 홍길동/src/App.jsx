import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import RecodeList from './page/RecodeList'
import Nav from './components/Nav'
import Footer from './components/Footer'
import RecodeDetail from './page/RecodeDetail'
import RecodeForm from './page/RecodeForm'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="recode/list" element={<RecodeList />} />
                    <Route path="recode/:id" element={<RecodeDetail />} />
                    <Route path="recode/add" element={<RecodeForm />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
