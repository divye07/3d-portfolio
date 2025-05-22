import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open-Source Contributor</h4>
                <h5>GirlScript Summer of Code</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Contributed in some Open-Source projects and fixed bugs in
              various repositories.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder & CEO</h4>
                <h5>Auroral Labs</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              developing innovative solutions in the field of AI and ML, IoT and pet's healthcare. 
              We are focused on creating an innovative and user-friendly pet's smart collar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
