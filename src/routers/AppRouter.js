import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';

import { DashboardRutes } from "./DashboardRutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path="login" element={<LoginScreen/>} />

             <Route path="/*" element={<DashboardRutes/>} />
        </Routes>    
    </BrowserRouter>
  )
}
