import object1 from "../../asseds/images/Object-1.svg";
import object2 from "../../asseds/images/Object-2.svg";
import object3 from "../../asseds/images/Object-3.svg";
const Client = () => {
  return (
    <div>
      <div className="fourth-bg">
        <div className="container">
          <div className="row py-5 text-center">
            <div className="col-md-3 text-white">
              <h2>Our Trusted Clients</h2>
              <p>
                Proin eget tortor risus cras ultricies ligula sed portavamus
                suscipit tortor
              </p>
            </div>

            <div className="col-md-3 pt-3">
              <div>
                <img src={object1} alt="" />
              </div>
            </div>

            <div className="col-md-3 pt-3 col-p">
              <div>
                <img src={object2} alt="" />
              </div>
            </div>

            <div className="col-md-3 pt-2">
              <div>
                <img src={object3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
