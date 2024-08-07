import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5초로 변경 (1초 대기 + 0.5초 애니메이션)

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <img src="/mwc.png" alt="Splash Screen" className="splash-image" />
    </div>
  );
};

export default SplashScreen;