import "./Services.css";

function Services() {
  const Services_Data = [
    {
      "s.no": 1,
      service: "Graphic Design",
      description:
        "Creating visual content to communicate messages through typography, imagery, color, and form. This includes logo design, branding, and marketing materials.",
    },
    {
      "s.no": 2,
      service: "UI/UX Design",
      description:
        "Designing user interfaces and improving user experiences for digital products. Focuses on enhancing usability, accessibility, and overall satisfaction.",
    },
    {
      "s.no": 3,
      service: "Frontend Development",
      description:
        "Building the visual and interactive aspects of websites and web applications. Involves coding in HTML, CSS, and JavaScript to create responsive and functional user interfaces.",
    },
    {
      "s.no": 4,
      service: "Dynamic Websites",
      description:
        "Developing websites with interactive and adaptive features that respond to user input and changing content. Includes server-side scripting and database integration for real-time data updates.",
    },
    {
      "s.no": 5,
      service: "Responsive Design",
      description:
        "Designing websites that adapt seamlessly to various screen sizes and devices. Ensures optimal viewing experience across desktops, tablets, and smartphones.",
    },
    {
      "s.no": 6,
      service: "Dynamic Websites",
      description:
        "Developing websites with interactive and adaptive features that respond to user input and changing content. Includes server-side scripting and database integration for real-time data updates.",
    },
  ];

  return (
    <>
      <div id="services" className="services">
        <div className="service-title"></div>
        <h1>My Skills</h1>
        <div id="serviceContainer" className="service-container">
          {Services_Data.map((service, index) => {
            return (
              <div key={index} className="service-format">
                <h3>{service["s.no"]}</h3>
                <h2>{service.service}</h2>
                <p>{service.description}</p>
                <div className="service-readmore">
                  <p>Read More</p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtUth15A-mWNrljOk82QW0ksFvPoG5GcIng&s"
                    alt="arrow-icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
