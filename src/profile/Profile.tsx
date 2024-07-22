import { useEffect, useRef } from 'react';
import "./Profile.css";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Project from "../sections/Project";
import Contact from "../sections/Contact";

interface ProfileProps {
  onSectionChange: (sectionId: string) => void;
}

export default function Profile({ onSectionChange }: ProfileProps) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const delta = Math.sign(event.deltaY);
      const currentSectionIndex = sectionRefs.current.findIndex(section =>
        section && section.getBoundingClientRect().top >= 0
      );

      let nextSectionIndex = currentSectionIndex + delta;
      nextSectionIndex = Math.max(0, Math.min(nextSectionIndex, sectionRefs.current.length - 1));

      const nextSection = sectionRefs.current[nextSectionIndex];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        onSectionChange(`section${nextSectionIndex + 1}`);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [onSectionChange]);

  return (
    <div className="profile">
      <div ref={el => sectionRefs.current[0] = el} id="section1">
        <AboutMe />
      </div>
      <div ref={el => sectionRefs.current[1] = el} id="section2">
        <Skills />
      </div>
      <div ref={el => sectionRefs.current[2] = el} id="section3">
        <Project />
      </div>
      <div ref={el => sectionRefs.current[3] = el} id="section4" className='section-contact'>
        <Contact />
      </div>
    </div>
  );
}
