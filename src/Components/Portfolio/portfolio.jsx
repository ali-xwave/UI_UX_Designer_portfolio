import img1 from "../../asseds/images/Rectangle-1.svg";
import img2 from "../../asseds/images/Rectangle-2.svg";
import img3 from "../../asseds/images/Rectangle-3.svg";
import img4 from "../../asseds/images/Rectangle-4.svg";
import img5 from "../../asseds/images/Rectangle-5.svg";
import img6 from "../../asseds/images/Rectangle-6.svg";

const Port = () => {
  return (
    <div>
      <div className="bg pt-5">
        <div className="text-center text-white">
          <h1>
            Let’s a have a look at <br /> my portfolio
          </h1>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            <br />
            user-friendly, and memorable interactive experiences.
          </p>
        </div>

        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <img src={img1} alt="" className="img-fluid" />
                  <img src={img4} alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <img src={img2} alt="" className="img-fluid" />
                  <img src={img5} alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <img src={img3} alt="" className="img-fluid" />
                  <img src={img6} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn-one mt-5 border-0 px-3 py-2 text-white">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Port;
