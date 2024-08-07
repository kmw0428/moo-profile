import { useState, useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./profile/Profile";
import SideBar from "./profile/Sidebar";
import SplashScreen from "./sections/SplashScreen";


export default function App() {
  const [currentSection, setCurrentSection] = useState("section1");
  const [showSplash, setShowSplash] = useState(true);

  const handleSectionChange = useCallback((sectionId: string) => {
    setCurrentSection(sectionId);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // 1.5초로 변경 (1초 대기 + 0.5초 애니메이션)
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className={`app ${currentSection}`}>
        <SideBar currentSection={currentSection} />
        <Routes>
          <Route path="/" element={<Profile onSectionChange={handleSectionChange} />} />
        </Routes>
      </div>
    </>
  );
}