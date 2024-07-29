import React, { useEffect } from 'react';
import { ProjectDetails } from '../types';

interface ProjectModalProps {
    details: ProjectDetails;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ details, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                console.log('Escape key pressed in modal');
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}
                style={{
                    maxHeight: '90vh',
                    overflowY: 'auto'
                }}>
                <h2>{details.title}</h2>
                <p>{details.fullDescription}</p>
                <h3>주요 기능</h3>
                <ul>
                    {details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <h3>사용 기술</h3>
                <p>{details.technologies.join(", ")}</p>
                <h3>도전 과제</h3>
                <p>{details.challenges}</p>
                <h3>배운 점</h3>
                <p>{details.lessons}</p>
                <h3>추가 이미지</h3>
                <div className="additional-images">
                    {details.additionalImages.map((img, index) => (
                        <img key={index} src={img} alt={`Project image ${index + 1}`} />
                    ))}
                </div>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default ProjectModal;