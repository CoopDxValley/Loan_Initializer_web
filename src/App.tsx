import "./App.css";
import Calculator from "./components/Calculator";
import KYCpage1 from "./components/KYCpage1";
import KYCpage2 from "./components/KYCpage2";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/dashboard";
import Landing from "./pages/landing";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "../AuthProvider";
import Layout from "./Layout";
import LoanPackages from "./pages/loanPackages";
import Souq from "./pages/souqpass";
import Contract from "./components/Contract";
import MyLoans from "./pages/MyLoans";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/calculator" element={<Calculator />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/kyc1"
            element={
              <PrivateRoute>
                <Layout>
                  <KYCpage1 />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/kyc2"
            element={
              <PrivateRoute>
                <Layout>
                  <KYCpage2 />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/packages"
            element={
              <PrivateRoute>
                <Layout>
                  <LoanPackages />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Landing />} />
          <Route
            path="/contract"
            element={
              <PrivateRoute>
                <Layout>
                  <Contract />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/Souq"
            element={
              <PrivateRoute>
                <Layout>
                  <Souq />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/myloans"
            element={
              <PrivateRoute>
                <Layout>
                  <MyLoans />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function PrivateRoute({ children }: any) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default App;
