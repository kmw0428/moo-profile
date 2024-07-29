import { useState, useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./profile/Profile";
import SideBar from "./profile/Sidebar";
import ProjectModal from "./sections/ProjectModal";
import { ProjectDetails } from "./types";

export default function App() {
  const [currentSection, setCurrentSection] = useState("section1");
  const [modalContent, setModalContent] = useState<ProjectDetails | null>(null);

  const handleSectionChange = useCallback((sectionId: string) => {
    setCurrentSection(sectionId);
  }, []);

  const preventDefault = useCallback((e: Event) => {
    console.log('preventDefault called', e.type);
    e.preventDefault();
    e.stopPropagation();  // 이벤트 전파 중지
  }, []);

  const disableScroll = useCallback(() => {
    console.log('disableScroll called');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';  // html 요소에도 적용
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('scroll', preventDefault, { passive: false });  // scroll 이벤트도 방지
    console.log('Scroll events disabled');
  }, [preventDefault]);

  const enableScroll = useCallback(() => {
    console.log('enableScroll called');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    window.removeEventListener('wheel', preventDefault);
    window.removeEventListener('touchmove', preventDefault);
    window.removeEventListener('scroll', preventDefault);
    console.log('Scroll events enabled');
  }, [preventDefault]);

  const openModal = useCallback((details: ProjectDetails) => {
    console.log('openModal called');
    setModalContent(details);
    disableScroll();
    document.body.classList.add('modal-open');
    document.documentElement.classList.add('modal-open');
  }, [disableScroll]);

  const closeModal = useCallback(() => {
    console.log('closeModal called');
    setModalContent(null);
    enableScroll();
    document.body.classList.remove('modal-open');
    document.documentElement.classList.remove('modal-open');
  }, [enableScroll]);

  useEffect(() => {
    console.log('useEffect running, modalContent:', modalContent);
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key);
      if (event.key === 'Escape' && modalContent) {
        console.log('Escape key pressed, closing modal');
        closeModal();
      }
    };

    if (modalContent) {
      console.log('Adding keydown event listener');
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      console.log('useEffect cleanup');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalContent, closeModal]);

  return (
    <div className={`app ${currentSection}`}>
      <SideBar currentSection={currentSection} />
      <Routes>
        <Route path="/" element={<Profile onSectionChange={handleSectionChange} openModal={openModal} />} />
      </Routes>
      {modalContent && <ProjectModal details={modalContent} onClose={closeModal} />}
    </div>
  );
}