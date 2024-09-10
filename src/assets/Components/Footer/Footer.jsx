import "./Footer.css";

function Footer() {
  const goToTop = () => {
    const element = document.getElementById("profile");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left"></div>
        <p>
          I am a frontend developer based in Pakistan with four months of
          hands-on experience in crafting dynamic and responsive web
          applications.
        </p>
      </div>
      <div className="footer-top-right"></div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          @zakir ahmad , All right reserved
        </div>
        <div className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
      <div className="go-to-top">
        <button onClick={goToTop}>Go to top</button>
      </div>
    </div>
  );
}

export default Footer;
