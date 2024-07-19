import React from "react";
import './Project.css';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  pageUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, pageUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
      </div>
      <div className="project-overlay">
        <div className="overlay-content">
          <h3>{title}</h3>
          <div className="project-buttons">
            <button className="detail-button">자세히 보기</button>
            {pageUrl && (
              <a href={pageUrl} target="_blank" rel="noopener noreferrer" className="site-button">
                사이트
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  const projects = [
    {
      image: '/projects/dinosaurmain.png',
      title: 'Mesozoic Eden',
      description: '팀프로젝트',
      pageUrl: '',
      githubUrl: 'https://github.com/kmw0428/dinosaurfront',
    },
    {
      image: '/projects/shoppingmain.png',
      title: 'Celeste',
      description: '팀프로젝트',
      pageUrl: 'https://shoppingfront.onrender.com',
      githubUrl: 'https://github.com/kmw0428/shop-front',
    },
    // 더 많은 프로젝트를 추가할 수 있습니다
  ];
  return (
    <section id="section3" className="section">
      <div className="about-content">
        <h1 className="title">PROJECT</h1>
        <div className="project-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
