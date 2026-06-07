import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter ইম্পোর্ট করা হলো

// আপনার সমস্ত পেজ ও কম্পোনেন্ট ইম্পোর্ট
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import OurHistory from "./Pages/OurHistory";
import VisionMissionss from "./Pages/VisionMissionss";
import Leadership from "./Pages/Leadership";
import BusinessModels from "./Pages/BusinessModels";
import OurInnovation from "./Pages/OurInnovation";
import Mentorerpss from "./Pages/Mentorerpss";
import DailyLedgers from "./Pages/DailyLedgers";
import CodeOfConduct from "./Pages/CodeOfConduct";
import OurCorporatePartners from "./Pages/OurCorporatePartners";
import OurClients from "./Pages/OurClients";
import InvestorsQuerys from "./Pages/InvestorsQuerys";
import CustomCursor from "./Components/MouseCursorComponent/CustomCursor";
import Blogs from "./Pages/Blogs";
import Careers from "./Pages/Careers";
import GeneralEnquiriess from "./Pages/GeneralEnquiriess";
import JobLists from "./Pages/JobLists";
import CareersJobs from "./Pages/CareersJobs";
import DashboardLayout from "./Pages/DashboardLayout";
import DashboardHome from "./Pages/DashboardHome";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    // আমরা পুরো অ্যাপটিকে BrowserRouter দিয়ে মুড়িয়ে দিলাম যাতে public/404.html এর সাথে এটি ক্লিন ইউআরএল বজায় রাখতে পারে
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        {/* পাবলিক রুটস */}
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="history" element={<OurHistory />} />
          <Route path="vision-mission" element={<VisionMissionss />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="business-model" element={<BusinessModels />} />
          <Route path="innovation" element={<OurInnovation />} />
          <Route path="erp" element={<Mentorerpss />} />
          <Route path="daily" element={<DailyLedgers />} />
          <Route path="code-of-conduct" element={<CodeOfConduct />} />
          <Route path="partners" element={<OurCorporatePartners />} />
          <Route path="clients" element={<OurClients />} />
          <Route path="investors-query" element={<InvestorsQuerys />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="career" element={<Careers />} />
          <Route path="general-enquiries" element={<GeneralEnquiriess />} />
          <Route path="job-list" element={<JobLists />} />
          <Route path="careers-jobs" element={<CareersJobs />} />
        </Route>
        
        {/* লগইন রাউট */}
        <Route path="/login" element={<Login />} />

        {/* প্রোটেক্টেড ড্যাশবোর্ড রাউট */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}