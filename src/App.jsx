import { Routes, Route } from 'react-router-dom';
import Root from './Layout/Root';
import Home from './Pages/Home';
import OurHistory from './Pages/OurHistory'; 
import VisionMissionss from './Pages/VisionMissionss';
import Leadership from './Pages/Leadership';
import BusinessModels from './Pages/BusinessModels';
import OurInnovation from './Pages/OurInnovation';
import Mentorerpss from './Pages/Mentorerpss';
import DailyLedgers from './Pages/DailyLedgers';
import CodeOfConduct from './Pages/CodeOfConduct';
import OurCorporatePartners from './Pages/OurCorporatePartners';
import OurClients from './Pages/OurClients';
import InvestorsQuerys from './Pages/InvestorsQuerys';
import CustomCursor from './Components/MouseCursorComponent/CustomCursor';
import Blogs from './Pages/Blogs';
import Careers from './Pages/Careers';
import GeneralEnquiriess from './Pages/GeneralEnquiriess';
import JobLists from './Pages/JobLists';


export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="history" element={<OurHistory />} />
          <Route path="vision-mission" element={<VisionMissionss />} />
          <Route path='leadership' element={<Leadership />} />
          <Route path='business-model' element={<BusinessModels/>} />
          <Route path='innovation' element={<OurInnovation/>} />
          <Route path='erp' element={<Mentorerpss />} />
          <Route path='daily' element={<DailyLedgers />} />
          <Route path='code-of-conduct' element={<CodeOfConduct />}/>
          <Route path='partners' element={<OurCorporatePartners/>}/>
          <Route path='clients' element={<OurClients/>}/>
          <Route path='investors-query' element={<InvestorsQuerys/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='career' element={<Careers/>}/>
          <Route path='general-enquiries' element={<GeneralEnquiriess/>}/>
          <Route path='job-list' element={<JobLists/>}/>
        </Route>
      </Routes>
    </>
  );
}