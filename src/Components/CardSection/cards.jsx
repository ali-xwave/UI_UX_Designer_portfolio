import mlogo from "../../asseds/images/M-Icon.svg";
import selogo from "../../asseds/images/Se-Icon.svg";
import logo from "../../asseds/images/third-logo.svg";
const CardSection = () => {
  return (
    <div>
      <div className="bg pt-5 text-white">
        <div className="text-center">
          <p className="fs-1 text-color">My Services</p>
          <h1>Why hire me for your next project</h1>
        </div>

        <div className="container">
          <div className="row py-5">
            <div className="col-md-4">
              <div className="px-3 py-4 fourth-bg">
                <span>
                  <img src={mlogo} alt="" />
                </span>
                <h2 className="pt-4">Blog articles</h2>
                <p>
                  Mauris vel quam nunc. Quisque tempor tempus aliquet.
                  Donec egestas odio et tempor.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="px-3 py-4 fourth-bg">
                <img src={selogo} alt="" />
                <h2 className="pt-4">SEO strategy</h2>
                <p>
                  Mauris vel quam nunc. Quisque  tempor tempus aliquet.
                  Donec egestas odio et tempor.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="px-3 py-4 fourth-bg">
                <img src={logo} alt="" />
                <h2 className="pt-4">Content architecture</h2>
                <p>
                  Mauris vel quam nunc. Quisque tempor tempus aliquet.
                  Donec egestas odio et tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
