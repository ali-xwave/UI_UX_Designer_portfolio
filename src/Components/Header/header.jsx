import logo from "../../asseds/images/Header-Logo.svg";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="bg ">
        <div className="container pt-3">
          <div>
            <nav class="container navbar navbar-expand-lg">
              <a class="navbar-brand" href="#Anchor">
                <img src={logo} alt="" />
              </a>
              <button
                class="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="fw-bold gap-5 nav-margin navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <a href="#Home">Home</a>
                  </li>
                  <li>
                    <a href="#About">Case Studies </a>
                  </li>
                  <li>
                    <a href="#Skills">Blog</a>
                  </li>
                  <li>
                    <a href="#Contact">Services</a>
                  </li>
                  <li>
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
                <div>
                  <button class=" bg-color text-white border-0 px-3 py-2 me-5">Contact</button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
