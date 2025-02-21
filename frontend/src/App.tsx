import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Dashboard/Billing';
import Layout from './components/Layout';
import AdminLayout from './components/Admin/Layout/AdminLayout';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import Subscribers from './pages/Admin/Subscribers';
import Applications from './pages/Admin/Applications';
import Reports from './pages/Admin/Reports';
import Settings from './pages/Admin/Settings';
import DashboardLayout from './components/Dashboard/Layout/DashboardLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/online-islemler" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="subscribers" element={<Subscribers />} />
          <Route path="applications" element={<Applications />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="history" element={<div>Geçmiş İçeriği</div>} />
          <Route path="billing" element={<Billing />} />
          <Route path="settings" element={<div>Ayarlar İçeriği</div>} />
        </Route>

        {/* Home Route */}
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />

        {/* 404 ve yönlendirmeler */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App; 