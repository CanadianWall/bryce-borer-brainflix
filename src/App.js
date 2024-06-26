import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to ='/videos'  />} />
        <Route path="videos" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="videos/:videoId" element={<HomePage />}/>
        <Route path="*" element={<NotFoundPage />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;