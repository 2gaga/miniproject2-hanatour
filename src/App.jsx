import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mypage from './pages/mypage/Mypage';

function App() {
    return (
        <BrowserRouter>
            <div id="wrap">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mypage" element={<Mypage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
