import lineimg from "../../asseds/images/Line.svg";
import teerimg from "../../asseds/images/Teer.svg";
import vectorimg from "../../asseds/images/vector.svg";
const Fourth = () => {
  const data = [
    {
      Num: "01",
      imgUrl: lineimg,
      imageUrl: teerimg,
      heading: "UI/UX Design",
      oneimageUrl: teerimg,
      text: "Web Design",
      twoimageUrl: teerimg,
      textOne: "App Design",
      threeimageUrl: teerimg,
      textTwo: "Dashboard Design"
    },
    {
      Num: "02",
      imgUrl: lineimg,
      imageUrl: teerimg,
      heading: "UI/UX Design",
      oneimageUrl: teerimg,
      text: "Web Development",
      twoimageUrl: teerimg,
      textOne: "App Development",
      Url: teerimg,

    },
    {
      Num: "03",
      imgUrl: lineimg,
      imageUrl: teerimg,
      heading: "Development",
      oneimageUrl: teerimg,
      text: "Brand Logo",
      twoimageUrl: teerimg,
      textOne: "Brand Promotion",
      Url: teerimg,

    },

  ]
  return (
    <div>
      <div className="fourth-bg">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 text-white py-5">
              {data.map((item) => {
                return (
                  <>
                    <div className="d-flex justify-content-between">
                      <span>{item.Num}</span>
                      <span><img src={item.imgUrl} alt="" className="img-fluid" /></span>
                      <span><img src={item.imageUrl} alt="" className="img-fluid" /></span>
                    </div>
                    <h3>{item.heading}</h3>
                    <div className="d-flex justify-content-between py-4">
                      <img src={item.oneimageUrl} alt="" className="img-fluid" />
                      <span className="pd">{item.text}</span>

                      <img className="" src={item.twoimageUrl} alt="" />
                      <span>{item.textOne}</span>
                      <img className="" src={item.threeimageUrl} alt="" />
                      <span>{item.textTwo}</span>gi
                    </div>
                  </>
                )
              })}
            </div>

            <div className="col-md-6 text-white pt-5">
              <div className="pt-5 ps-5">
                <h1>
                  Solving problems <br /> by the services
                </h1>
                <p className="py-4">
                  I seek to push the limits of creativity to create <br />
                  high-engaging, user-friendly, and memorable <br />
                  interactive experiences.
                </p>
                <button className="border-0 text-white bg-color px-3 py-2">
                  Learn More <img src={vectorimg} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
