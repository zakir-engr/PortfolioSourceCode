import "./Developer.css";
function Developer() {
  const connectWithMe = () => {
    const connect = document.getElementById("contact");
    connect.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const GoToBottom = () => {
    const Element = document.getElementById("footer");
    Element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const GoToTop = () => {
    const e = document.getElementById("profile");
    e.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className="drop-up">
        <img
          onClick={GoToTop}
          src="https://w7.pngwing.com/pngs/821/97/png-transparent-black-arrow-up-illustration-arrow-desktop-symbol-up-arrow-angle-triangle-sign-thumbnail.png"
          alt="drop-up"
        />
      </div>
      <div className="drop-down">
        <img
          onClick={GoToBottom}
          src="https://static.vecteezy.com/system/resources/previews/004/636/793/non_2x/download-arrow-icon-drop-shadow-down-silhouette-symbol-computer-and-smartphone-digital-interface-symbol-files-uploading-icon-download-arrow-logo-concept-down-symbol-isolated-illustration-vector.jpg"
          alt="drop down"
        />
      </div>

      <div id="profile" className="Profile">
        <img
          id="profileImg"
          className="profile-img"
          src="https://scontent.fisb3-3.fna.fbcdn.net/v/t39.30808-1/454632397_3755096321471492_6698666079278518517_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHBSo57MA_8nxm-RTmTNWh9a4EXcp4QksdrgRdynhCSx6oQJ36bU0DDPYIx7JjPAFAANVZMhnf9kjsavRqLTsVU&_nc_ohc=h-146osRMOsQ7kNvgHdV5Aw&_nc_ht=scontent.fisb3-3.fna&_nc_gid=AqvKkN-gjFGh6VY290Xzs2b&oh=00_AYCTmABK2mP_dNjVaUEaKGPl-hTcCduxYsUIFn3b5QMrcg&oe=66E31C85"
          alt="profile image"
        />

        <h1>
          <span>Hi, i'm Zakir Ahmad</span> an intermediate skilled developer
          from Pakistan.
        </h1>
        <p>
          i'm a frontend developer from Pakistan with 1 year experience, i can
          design UI/UX and i can develope single page application and dynamic
          websites
        </p>
        <div className="action">
          <button onClick={connectWithMe} className="connect">
            Connect with me
          </button>
          <a
            href="https://drive.google.com/file/d/1XnI_derjexBBCEpoaV7bpDLCwjPwxuxs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume">Download Resume</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Developer;
