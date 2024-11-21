import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ConvocatoriasPage from './pages/ConvocatoriasPage';
import ConvocatoriaFormPage from './pages/ConvocatoriaFormPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectFormPage from './pages/ProjectFormPage';
import UsersPage from './pages/UsersPage';
import UserFormPage from './pages/UserFormPage';

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Header />
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-gray-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/convocatorias" element={<ConvocatoriasPage />} />
              <Route path="/convocatorias/new" element={<ConvocatoriaFormPage />} />
              <Route path="/convocatorias/edit/:id" element={<ConvocatoriaFormPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/new" element={<ProjectFormPage />} />
              <Route path="/projects/edit/:id" element={<ProjectFormPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/new" element={<UserFormPage />} />
              <Route path="/users/edit/:id" element={<UserFormPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;