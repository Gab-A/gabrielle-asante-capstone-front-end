import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "../src/pages/LandingPage/LandingPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import SignupPage from "../src/pages/SignupPage/SignupPage";
import ProfilePage from "../src/pages/ProfilePage/ProfilePage";
import JournalPage from "../src/pages/JournalPage/JournalPage";
import TrackerPage from "../src/pages/TrackerPage/TrackerPage";
import JournalEntriesPage from "./pages/JournalEntriesPage/JournalEntriesPage";
import MeditationPage from "./pages/MeditationPage/MeditationPage";
import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/profile"
            element={<ProfilePage mood={mood} setMood={setMood} />}
          />

          <Route
            path="/journal/new"
            element={<JournalPage mood={mood} setMood={setMood} type={"new"} />}
          />
          <Route
            path="/journal/edit/:journalId"
            element={
              <JournalPage mood={mood} setMood={setMood} type={"edit"} />
            }
          />
          <Route path="/journal-entries" element={<JournalEntriesPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
