import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Laboratory from './pclab/main';
import Main from './landing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/help" element={<Main />} />
        <Route path="/" element={<Laboratory />} />
     </Routes>
    </Router>
  );
}