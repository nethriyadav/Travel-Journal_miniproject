import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import TravelJournal from "./components/HomePage/TravelJournal";
import NewEntry from "./components/EntryPage/NewEntry";
import JourneyDetails from "./components/JourneyDetail/JourneyDetails";
import JourneyMap from "./components/JourneysMap/JourneyMap";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SettingsPage from "./components/AccountSettingsPage/SettingsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignUpPage/CreateAccountPage";
import NewLogin from "./components/NewLogin/LoginPage";
import ForgotPasswordPage from "./components/LoginPage/ForgotPasswordPage";
import Header from "./components/HomePage/Header";
import ScrollToTop from "./components/ScrollToTop";
import VerifySuccess from "./components/SignUpPage/verifySuccess";
import BottomNavigation from "./components/BottomNavigation";
import UpdateProfilePage from "./components/AccountSettingsPage/UpdateProfilePage";
import SearchResults from "./components/SearchResults";
import { ToastContainer } from "react-toastify";
import {Toaster} from "sonner";
import "react-toastify/dist/ReactToastify.css";

// Context
import { UserProvider, UserContext } from "./context/UserContext"; // Import context

import { JournalProvider } from "./context/JournalContext";

function AppContent() {
  const location = useLocation();
  const [authChecked, setAuthChecked] = useState(false);

  // Get user data from the context
  const { isLoggedIn} = useContext(UserContext);

  useEffect(() => {
    // We don't need to fetch the user again here because it's already managed in context.
    setAuthChecked(true); // Set authChecked to true once context data is ready
  }, [isLoggedIn]);

  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot";

  if (!authChecked) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {!hideHeader && <Header />}

      <ScrollToTop />
      <section className="pt-8">
        <Routes>
          <Route path="/" element={<TravelJournal />} />
          <Route path="/newEntry" element={<NewEntry />} />
          <Route path="/journey-details/:id" element={<JourneyDetails />} />
          <Route path="/journey-map" element={<JourneyMap />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/update-profile" element={<UpdateProfilePage/>}/>
          <Route path="*" element={<NewLogin />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/verify-success" element={<VerifySuccess />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
        <Toaster richColors position="top-right" />

        {authChecked && isLoggedIn && <BottomNavigation />}
      </section>
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      {" "}
      <JournalProvider>
      {/* Wrap the app with UserProvider to provide context */}
      <Router>
        <AppContent />
      </Router>
      </JournalProvider>
    </UserProvider>
  );
}
