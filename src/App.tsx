import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './profile/Profile'
import SideBar from './profile/Sidebar'

export default function App() {
  const [currentSection, setCurrentSection] = useState('section1');

  const handleSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  return (
    <>
      <div className={`app ${currentSection}`}>
        <SideBar currentSection={currentSection} />
        <Routes>
          <Route path='/' element={<Profile onSectionChange={handleSectionChange} />} />
        </Routes>
      </div>
    </>
  )
}