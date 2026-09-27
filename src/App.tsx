import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Consultation from './pages/Consultation';
import Weather from './pages/Weather';
import Calendar from './pages/Calendar';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import About from './pages/About';
import Donation from './pages/Donation';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import AccountSettings from './pages/AccountSettings';
import ChangePassword from './pages/ChangePassword';
import AccountIntegration from './pages/AccountIntegration';
import SocialLoginCallback from './pages/SocialLoginCallback';
import ProtectedRoute from './pages/ProtectedRoute';
import GuestRoute from './pages/GuestRoute';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
      <>
        <Router>
        <Routes>
          <Route path="/" element={<GuestRoute>
            <Index/>
          </GuestRoute>}/>

          <Route path="/login" element={<GuestRoute>
            <Login/>
          </GuestRoute>}/>

          <Route path="/register" element={<GuestRoute>
            <Register/>
          </GuestRoute>}/>

          <Route path="/forgot-password" element={<GuestRoute>
            <ForgotPassword/>
          </GuestRoute>}/>

          <Route path="/verify-otp" element={<GuestRoute>
            <VerifyOTP/>
          </GuestRoute>}/>

          <Route path="/reset-password" element={<GuestRoute>
            <ResetPassword/>
          </GuestRoute>}/>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/consultation" element={<ProtectedRoute><Consultation/></ProtectedRoute>}/>
          <Route path="/weather" element={<ProtectedRoute><Weather/></ProtectedRoute>}/>
          <Route path="/calendar" element={<ProtectedRoute><Calendar/></ProtectedRoute>}/>
          <Route path="/notifications" element={<ProtectedRoute><Notifications/></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
          <Route path="/donation" element={<ProtectedRoute><Donation/></ProtectedRoute>}/>
          <Route path="/faq" element={<ProtectedRoute><FAQ/></ProtectedRoute>}/>
          <Route path="/terms" element={<ProtectedRoute><Terms/></ProtectedRoute>}/>
          <Route path="/privacy" element={<ProtectedRoute><Privacy/></ProtectedRoute>}/>
          <Route path="/account-settings" element={<ProtectedRoute><AccountSettings/></ProtectedRoute>}/>
          <Route path="/change-password" element={<ProtectedRoute><ChangePassword/></ProtectedRoute>}/>
          <Route path="/account-integration" element={<ProtectedRoute><AccountIntegration/></ProtectedRoute>}/>
          <Route path="/social-login/callback" element={<SocialLoginCallback/>}/>
        </Routes>
      </Router>
        <Toaster/>
      </>
  );
}

export default App;