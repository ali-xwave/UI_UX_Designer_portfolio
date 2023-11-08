import vector1 from "../../asseds/images/Vector (1).svg";
import vector2 from "../../asseds/images/Vector (2).svg";
import imgsur from "../../asseds/images/survay-img.svg";
import arrow from "../../asseds/images/Arrow.svg";
const Survay = () => {
  return (
    <div>
      <div className="bg py-5">
        <div className="text-white text-center pt-3">
          <h1>What People Say</h1>
          <p>
            Welcome to our gym & fitness training centre. Sore today, <br />
            strong tomorrow. Improve your fitness today.
          </p>
        </div>

        <div className="container">
          <div className="row text-white pt-5">
            <div className="col-md-6">
              <div className="fourth-bg">
                <img src={vector1} alt="" className="pt-3 ps-3" />
                <p className="ps-5">
                  I have been taking gym and fitness training here since a long{" "}
                  time and I found here so much easy, comfort and flexibility.
                  The mentors are so good and they train me very well.
                </p>
                <div className="d-flex justify-content-end px-3">
                  <img src={vector2} alt="" />
                </div>
              </div>
              <div className="pt-5 d-flex">
                <img src={imgsur} alt="" />
                <p className="ps-5 pt-4">
                  Ben Stokes <br />
                  Member
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="fourth-bg">
                <img src={vector1} alt="" className="pt-3 ps-3" />
                <p className="ps-5">
                  I have been taking gym and fitness training here since a long{" "}
                  time and I found here so much easy, comfort and flexibility.
                  The mentors are so good and they train me very well.
                </p>
                <div className="d-flex justify-content-end px-3">
                  <img src={vector2} alt="" className="" />
                </div>
              </div>
              <div className="d-flex py-5">
                <img src={imgsur} alt="" />
                <p className="pt-4 ps-5">
                  Ben Stokes <br />
                  <span>Member</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survay;
