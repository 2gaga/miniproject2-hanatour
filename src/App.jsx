import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Mypage from './pages/mypage/mypage';


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
