import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const TITLES = [
  { h2: "AI/ML Engineer", h3: "Aspiring" },
  { h2: "Auroral Labs", h3: "Co-Founder & CEO" },
];

const Landing = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); // Add a key to reset animations

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
      setKey(prevKey => prevKey + 1); // Increment key to force re-render and animation restart
    }, 2500); // Match the CSS animation duration
    return () => clearInterval(interval);
  }, []);

  const current = TITLES[index];

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Divye
              <br />
              <span>Prakash</span>
            </h1>
          </div>
          <div className="landing-info">
            {current.h3 && <h3 key={`h3-${key}`} className="fade-title">{current.h3}</h3>}
            <h2 key={`h2-${key}`} className="landing-info-h2 fade-title">{current.h2}</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
