import React from 'react';
import './Global.css';

interface FlipCardProps {
  flipped: boolean;
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ flipped, front, back }) => (
  <div className={`flip-card${flipped ? ' flipped' : ''}`}>
    <div className="flip-card-inner">
      <div className="flip-card-front">{front}</div>
      <div className="flip-card-back">{back}</div>
    </div>
  </div>
);

export default FlipCard;