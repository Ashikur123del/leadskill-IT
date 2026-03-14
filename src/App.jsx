import { Routes, Route } from 'react-router-dom';
import Root from './Layout/Root';
import Home from './Pages/Home';
import OurHistory from './Pages/OurHistory'; 
import VisionMissionss from './Pages/VisionMissionss';
import Leadership from './Pages/Leadership';
import BusinessModels from './Pages/BusinessModels';
import OurInnovation from './Pages/OurInnovation';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} /> {/* "/" এর জন্য index ব্যবহার করা ভালো */}
        <Route path="history" element={<OurHistory />} />
        <Route path="vision-mission" element={<VisionMissionss />} />
        <Route path='leadership' element={<Leadership />} />
        <Route path='business-model' element={<BusinessModels/>} />
        <Route path='innovation' element={<OurInnovation/>} />
      </Route>
    </Routes>
  );
}