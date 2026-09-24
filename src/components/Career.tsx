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
                <h4>Software Engineer Intern</h4>
                <h5>Axlero Solutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Participating in structured 2-month project execution cycles with
              phased 4-week implementation milestones, rigorous GitHub team branch
              compliance, and full-cycle software delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Bluestock Fintech • Remote</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed internship working closely with the leadership team.
              Gained practical exposure to cloud and big data platform concepts
              while assisting in application development using MongoDB and
              React.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>Dr. D.Y. Patil Technical Campus, SPPU</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science Engineering (CGPA: 8.4)
              at Savitribai Phule Pune University. Deep focus on Data
              Structures, DBMS, Operating Systems, Networks, and Software
              Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Oracle AI Foundations</h4>
                <h5>Oracle University • Certified Associate</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
              (ID: 102545782OCI25AICFA). Validated expertise in AI concepts,
              machine learning workloads, and Oracle Cloud AI infrastructure.
              <br />
              <a
                href="/certificates/eCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                style={{
                  color: "#d29bff",
                  textDecoration: "underline",
                  fontSize: "14px",
                  display: "inline-block",
                  marginTop: "6px",
                }}
              >
                View Official Certificate ↗
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI Studio</h4>
                <h5>Google Cloud & Simplilearn</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Introduction to Generative AI Studio (Code: 9624285).
              Demonstrated skills in generative AI models, prompt engineering,
              and building enterprise AI applications.
              <br />
              <a
                href="/certificates/GEN%20AI%20STUDIO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                style={{
                  color: "#d29bff",
                  textDecoration: "underline",
                  fontSize: "14px",
                  display: "inline-block",
                  marginTop: "6px",
                }}
              >
                View Official Certificate ↗
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Kaggle Member</h4>
                <h5>Kaggle • Community Badge</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Earned official Kaggle Community Member badge. Active participant in
              machine learning problem solving, datasets, and collaborative data
              science projects.
              <br />
              <a
                href="/certificates/Kaggel.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                style={{
                  color: "#d29bff",
                  textDecoration: "underline",
                  fontSize: "14px",
                  display: "inline-block",
                  marginTop: "6px",
                }}
              >
                View Badge ↗
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
