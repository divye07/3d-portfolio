import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
  <div className="work-section" id="work">
    <div className="work-container section-container">
      <h2>
        My <span>Work</span>
      </h2>
      <div className="work-flex">

        {/* Project 1 */}
        <div className="work-box">
          <WorkImage image="/images/trashcam.png" alt="Trash Cam screenshot" />
          <div className="work-info">
            <div className="work-title">
              <h3>1</h3>
              <div>
                <h4>Trash Cam</h4>
                <p className="category">Waste Management | Web App</p>
              </div>
            </div>
            <h4>Tools</h4>
            <ul className="tool-list">
              <li>Python</li>
              <li>Flask</li>
              <li>HTML & CSS</li>
              <li>Google Gemini API</li>
            </ul>
            <h4>Features</h4>
            <ul className="feature-list">
              <li>Waste Detection</li>
              <li>Waste Classification</li>
              <li>Waste Segmentation</li>
            </ul>
            <a
              href="https://trashcam-devsprint.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="website-button">Visit Website</button>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="work-box">
          <WorkImage image="/images/voting.png" alt="Secure voting gdg" />
          <div className="work-info">
            <div className="work-title">
              <h3>2</h3>
              <div>
                <h4>Secure voting GDG</h4>
                <p className="category">Face-API.js | Web App</p>
              </div>
            </div>
            <h4>Tools</h4>
            <ul className="tool-list">
              <li>React.js</li>
              <li>Face-API.js</li>
              <li>Gemini-Api integration</li>
              <li>Firebase</li>
            </ul>
            <h4>Features</h4>
            <ul className="feature-list">
              <li>Real-time Voting Track</li>
              <li>Admin Dashboard</li>
              <li>2-Factor Authentication</li>
            </ul>
            <a
              href="https://secure-voting-gdg.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="website-button">Visit Website</button>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="work-box">
          <WorkImage image="/images/survey.png" alt="Aurora Pet Health screenshot" />
          <div className="work-info">
            <div className="work-title">
              <h3>3</h3>
              <div>
                <h4>Survey APP</h4>
                <p className="category">Referral survey form | Web App</p>
              </div>
            </div>
            <h4>Tools</h4>
            <ul className="tool-list">
              <li>Firebase</li>
              <li>Firestore</li>
              <li>Next.js</li>
              <li>Express.js</li>
            </ul>
            <h4>Features</h4>
            <ul className="feature-list">
              <li>Real-time referral link tracking</li>
              <li>Firebase Authentication</li>
              <li>Live Dashboard</li>
            </ul>
            <a
              href="https://auroral-labs-survey.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="website-button">Visit Website</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

};

export default Work;
