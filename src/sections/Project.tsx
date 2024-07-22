import React from "react";
import './Project.css';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  keywords: string[];
  pageUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, keywords, pageUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-keywords">{keywords.map((keyword, index) => (
          <span key={index} className="project-keyword">{keyword}</span>
        ))}</p>
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
      description: 'Mesozoic Eden의 공룡과 직원을 소개하는 사이트입니다.',
      keywords: ['팀', '공룡'],
      pageUrl: '',
      githubUrl: 'https://github.com/kmw0428/dinosaurfront',
    },
    {
      image: '/projects/shoppingmain.png',
      title: 'Céleste',
      description: '두피와 피부 진단을 통해, 본인에 맞는 타입들을 알아보고, 그에 맞는 제품을 추천하는 사이트입니다.',
      keywords: ['팀', '반응형', '사이드'],
      pageUrl: 'https://shoppingfront.onrender.com',
      githubUrl: 'https://github.com/kmw0428/shop-front',
    },
    {
      image: '/projects/moo-portfolio.png',
      title: 'Portfolio',
      description: '저만의 포트폴리오 사이트입니다.',
      keywords: ['개인', '포트폴리오', '반응형', '사이드'],
      pageUrl: 'https://moo-profile.onrender.com',
      githubUrl: 'https://github.com/kmw0428/moo-profile',
    }
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
