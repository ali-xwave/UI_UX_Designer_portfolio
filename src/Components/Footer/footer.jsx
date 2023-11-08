import footerimg from "../../asseds/images/footer-logo.svg";
import icons from "../../asseds/images/ICON-social.svg";
const Footer = () => {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="row pt-5 text-white">
            <div className="col-md-4 py-4">
              <img src={footerimg} alt="" />
              <p className="py-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffere
              </p>
            </div>
            <div className="col-md-4 py-4">
              <h5>Newsletter</h5>
              <div className="py-4">
                <input type="email" placeholder="Submit Your Emai" className="bg-black py-2 px-3 border" />
              </div>
            </div>
            <div className="col-md-4 py-4">
              <h5>Follow Me</h5>
              <div className="py-4">
                <img src={icons} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
