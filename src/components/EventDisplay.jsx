import React from "react";
import { motion } from "framer-motion";
import "./EventDisplay.css";

const events = [
  "Hackathon",
  "AI Challenge",
  "Space Coding",
  "Cyber Security",
  "Robotics",
  "Blockchain",
];

const eventColors = [
  "linear-gradient(315deg, #0F2027, #203A43, #2C5364)",  // Deep Space Blue
  "linear-gradient(315deg, #200122, #6f0000)",  // Dark Red Nebula
  "linear-gradient(315deg, #360033, #0b8793)",  // Cosmic Purple-Teal
  "linear-gradient(315deg, #1a2a6c, #b21f1f, #fdbb2d)",  // Galaxy Gradient
  "linear-gradient(315deg, #3a1c71, #d76d77, #ffaf7b)",  // Nebula Pink-Orange
  "linear-gradient(315deg, #232526, #414345)",  // Asteroid Grey
];


const bendDistance = 60 ; // Reduced bending distance (was 100)
const radius = 180;
const centerX = 300;
const centerY = 300;

const generateStars = (count) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 2,
    speed: 2 + Math.random() * 3,
  }));
};

const stars = generateStars(100);

const EventDisplay = () => {
  return (
    <motion.div className="event-container">
      <h1>hello</h1>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="warp-star"
          initial={{
            opacity: 0,
            scale: 0.2,
            x: star.x - window.innerWidth / 2,
            y: star.y - window.innerHeight / 2,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.2, 1.5],
            x: [star.x - window.innerWidth / 2, 0],
            y: [star.y - window.innerHeight / 2, 0],
          }}
          transition={{
            duration: star.speed,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: star.delay,
          }}
        />
      ))}

      <svg className="branch-lines" viewBox="0 0 600 600">
        {events.map((event, index) => {
          const angle = (index * (360 / events.length)) * (Math.PI / 180);
          const startX = centerX;
          const startY = centerY;

          const bendDistance = 100;
          const bendX = centerX + bendDistance * Math.cos(angle);
          const bendY = centerY + bendDistance * Math.sin(angle);

          const bendAngle = 45 * (Math.PI / 180);
          const finalX = bendX + (radius - bendDistance) * Math.cos(angle + bendAngle);
          const finalY = bendY + (radius - bendDistance) * Math.sin(angle + bendAngle);

          return (
            <motion.path
  key={index}
  d={`M ${startX} ${startY} L ${bendX} ${bendY} L ${finalX} ${finalY}`}
  initial={{ pathLength: 0 ,opacity:0}}
  animate={{ pathLength: 1 ,opacity:1}}
  transition={{ duration: 2, ease: "easeInOut", delay: index * 0.4 }}
  stroke="rgba(173, 216, 230, 0.8)"
  strokeWidth="2"
  fill="transparent"
/>

          );
        })}
      </svg>


      <motion.svg 
  className="circular-border" 
  viewBox="0 0 360 360"
  animate={{ rotate: 360 }} // Continuous rotation
  transition={{ duration: 8, repeat: Infinity, ease: "linear" }} // Smooth infinite rotation
>
  <circle 
    cx="180" cy="180" 
    r="155" 
    fill="none" 
    stroke="rgba(255, 255, 255, 0.8)" 
    strokeWidth="3" 
    strokeDasharray="150,100,150,100" 
    strokeDashoffset="100"
  />
</motion.svg>


      <motion.div className="central-planet">TECHNICAL EVENTS</motion.div>




{events.map((event, index) => {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 768;

  const adjustedRadius = isMobile ? 100 : 180;
  const offset = isMobile ? 50 : 100;

  const angle = (index * (360 / events.length)) * (Math.PI / 180);
  const x = (adjustedRadius + offset) * Math.cos(angle - 120);
  const y = (adjustedRadius + offset) * Math.sin(angle - 120);

  return (
    <motion.div
      key={index}
      className="event-planet"
      style={{ background: eventColors[index % eventColors.length] }} // Assign color dynamically
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, scale: 1, x: x, y: y }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: index * 0.5 }}
    >
      {event}
    </motion.div>
  );
})}


    </motion.div>
  );
};

export default EventDisplay;