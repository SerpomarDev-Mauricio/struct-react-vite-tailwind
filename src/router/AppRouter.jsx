// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes de página
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/Auth/LoginPage"; // Tu componente principal de Login/Registro animado
import ProfilePage from "../pages/ProfilePage"; // Página de perfil de usuario
import AdminPage from "../pages/AdminPage"; // Página de administración

// Importa los componentes de autenticación y protección
import { AuthProvider } from "../contexts/AuthContext"; // <-- Importa el componente Proveedor
import ProtectedRoute from "./ProtectedRoute"; // <-- Importa el componente de Ruta Protegida

// Componente para la página 404 (No Encontrado)
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-4xl font-bold text-red-700 mb-4">
        404 - Página no encontrada
      </h1>
      <p className="text-lg text-gray-700">
        Lo sentimos, la página que buscas no existe.
      </p>
    </div>
  );
};

// Asegúrate de que tus componentes de página (ProfilePage, AdminPage)
// estén definidos en sus respectivos archivos como te indiqué anteriormente.
// Si no los tienes creados aún, créalos o estas importaciones darán error.

const AppRouter = () => {
  return (
    // <Router> envuelve toda tu aplicación para habilitar el enrutamiento.
    <Router>
      {/* <AuthProvider> envuelve todas las rutas que necesiten acceder al estado de autenticación. */}
      {/* Es crucial que el AuthProvider esté por encima de cualquier componente que use useAuth o ProtectedRoute. */}
      <AuthProvider>
        {/* <Routes> es el contenedor de todas tus rutas <Route>. */}
        <Routes>
          {/* ==================================== */}
          {/* ======== Rutas Públicas ======== */}
          {/* ==================================== */}

          {/* Ruta para la página principal de inicio */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para la página de login/registro (App.jsx con animación de paneles) */}
          {/* Esta ruta no necesita protección porque es para que los usuarios se autentiquen. */}
          <Route path="/auth" element={<LoginPage />} />

          {/* ==================================== */}
          {/* ======== Rutas Protegidas ======== */}
          {/* ==================================== */}

          {/* Ruta protegida para el Dashboard. Solo requiere que el usuario esté autenticado. */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                {" "}
                {/* Envuelve DashboardPage con ProtectedRoute */}
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Ruta protegida para el Perfil del usuario. Solo requiere que el usuario esté autenticado. */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                {" "}
                {/* Envuelve ProfilePage con ProtectedRoute */}
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Ruta protegida para la página de Administración.
              Requiere que el usuario esté autenticado Y tenga el rol 'admin'. */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRoles={["admin"]}>
                {" "}
                {/* Aquí se especifica el rol requerido */}
                <AdminPage />
              </ProtectedRoute>
            }
          />

          {/* ==================================== */}
          {/* ======== Ruta 404 (No Encontrado) ======== */}
          {/* ==================================== */}

          {/* Ruta comodín que coincide con cualquier URL que no haya coincidido con las anteriores. */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
