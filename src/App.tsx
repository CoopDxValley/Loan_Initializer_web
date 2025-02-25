import "./App.css";
import Calculator from "./components/Calculator";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "../AuthProvider";
import Layout from "./Layout";
import Souq from "./pages/souqpass";
import Contract from "./components/Contract";
import MyLoans from "./pages/MyLoans";
import Packages from "./pages/Packages";
import Apply from "./pages/Apply";
import Land from "./pages/Land";
import LoanDetails from "./pages/loanDetail";
import RM from "./pages/RM";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StylizedServerError from "./components/Error_Screen";
import { KYCForm } from "./components/Kyc/kyc-info";
import Settings from "./pages/Settings";
import PersonalInformation from "./components/Setting/Personal_Info";
import ChangePassword from "./components/Setting/Change_Password";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
                    <Apply />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/kyc"
              element={
                <PrivateRoute>
                  <Layout>
                    <KYCForm />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/packages"
              element={
                <PrivateRoute>
                  <Layout>
                    <Packages />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/RM"
              element={
                <PrivateRoute>
                  <Layout>
                    <RM />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Land />} />
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
            <Route path="/calculator" element={<Calculator />} />
            <Route
              path="/loan_details"
              element={
                <PrivateRoute>
                  <Layout>
                    <LoanDetails />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Layout>
                    <Settings />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/personal"
              element={
                <PrivateRoute>
                  <Layout>
                    <PersonalInformation />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/password"
              element={
                <PrivateRoute>
                  <Layout>
                    <ChangePassword />
                  </Layout>
                </PrivateRoute>
              }
            />
            {/* <Route path="/error" element={<StylizedServerError />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

function PrivateRoute({ children }: any) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default App;
