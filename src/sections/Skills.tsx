export default function Skills() {
  const frontendskills = [
    { name: 'HTML', icon: '/icons/html5.png' },
    { name: 'CSS', icon: '/icons/css.png' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Python', icon: '/icons/python.png' },
  ];

  const backendskills = [
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'Spring Boot', icon: '/icons/springboot.png' },
    { name: 'C#', icon: '/icons/cshrap.png' },
  ];

  const tools = [
    { name: 'VSCode', icon: '/icons/vscode.png' },
    { name: 'IntelliJ', icon: '/icons/intellij.png' },
    { name: 'Eclipse', icon: '/icons/eclipse.png' },
    { name: 'Docker', icon: '/icons/docker.png' },
    { name: 'MongoDB', icon: '/icons/mongodb.png' },
    { name: 'Unity', icon: '/icons/unity.png' },
    { name: 'Visual Studio', icon: '/icons/visualstudio.png'},
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'GitHub', icon: '/icons/github.png' },
  ];

  return (
    <section id="section2" className="section">
      <div className="about-content">
        <h1 className="title">SKILLS & TOOLS</h1>

        <h3>FrontEnd</h3>
        <div className="skills-container">
          {frontendskills.map((frontskill) => (
            <div key={frontskill.name} className="skill-item">
              <img src={frontskill.icon} alt={frontskill.name} className="skill-icon" />
            </div>
          ))}
        </div>

        <h3>BackEnd</h3>
        <div className="skills-container">
          {backendskills.map((backskill) => (
            <div key={backskill.name} className="skill-item">
              <img src={backskill.icon} alt={backskill.name} className="skill-icon" />
            </div>
          ))}
        </div>
        
        <h3>Tools</h3>
        <div className="tools-container">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-item">
              <img src={tool.icon} alt={tool.name} className="tool-icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
