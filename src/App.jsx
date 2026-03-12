import { Routes, Route } from 'react-router-dom';
import Root from './Layout/Root';
import Home from './Pages/Home';
import OurHistory from './Pages/OurHistory'; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} /> {/* "/" এর জন্য index ব্যবহার করা ভালো */}
        <Route path="history" element={<OurHistory />} />
      </Route>
    </Routes>
  );
}