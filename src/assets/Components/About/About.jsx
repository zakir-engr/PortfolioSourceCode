import "./About.css";
function About() {
  return (
    <div id="about" className="About">
      <div className="About-title">
        <h1>About Me</h1>
        <img
          src="https://static.thenounproject.com/png/4303775-200.png"
          alt="underline"
        />
      </div>
      <div className="About-section">
        <div className="About-left">
          <img
            src="https://scontent.fisb3-3.fna.fbcdn.net/v/t39.30808-6/280764288_147064751217271_8957683572435283100_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE5KipS0d4tDYo4qleKPyMNAMwIge9MmMMAzAiB70yYwwfTGIiZ3hkV-6xO9TI-1Q75bDsX0Q3vakVqqXtiYrXd&_nc_ohc=FXj8B0y5_uUQ7kNvgFCbTGC&_nc_zt=23&_nc_ht=scontent.fisb3-3.fna&_nc_gid=ABYD6qd7JemdYN7CK2IPHZ7&oh=00_AYBbj435v6n84aq4t2HVD1fJLCVfiv5p3rW7QewqY6bNPw&oe=66E3420A"
            alt=""
          />
        </div>
        <div className="About-right">
          <div className="About-para">
            <p>
              I am an intermediate-skilled web developer with a strong
              foundation in front-end technologies. My expertise includes HTML,
              Tailwind CSS, and React JS, enabling me to create responsive and
              dynamic user interfaces. I focus on delivering clean, efficient,
              and user-friendly designs. Always eager to learn, I continuously
              explore new tools and techniques to enhance my skills and provide
              high-quality work.
            </p>
            <p>
              In addition to my front-end skills, I am committed to continuous
              learning and staying up-to-date with the latest industry trends.
              This drive helps me enhance my abilities and ensures that I can
              provide high-quality, modren web solutions that meet user's needs
              and expectaions.
            </p>
          </div>
          <div className="About-skills">
            <div className="about-skill">
              <p>
                HTML & CSS <hr style={{ width: "50%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                JavaScript <hr style={{ width: "70%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                Tailwind Css
                <hr style={{ width: "60%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                React JS <hr style={{ width: "40%" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="achievements-container">
        <div className="achievements">
          <h1>1+</h1>
          <p>years of experience</p>
        </div>
        <div className="divider"></div>
        <div className="achievements">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="divider"></div>
        <div className="achievements">
          <h1>0</h1>
          <p>Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
