import hero from "../../asseds/images/Hero-img.svg";
const HeroSection = () => {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="row text-white">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="fs-1 pt-5">
                I am <span className="text-color">William</span> a UX <br />
                Designer from the <br /> Bronx
              </h1>
              <p>
                Hi, my name is Alex Smith and I love creating unique
                interfaces using code. Pixel perfect every time just try me
                out.
              </p>
              <button class="hero-btn text-white px-3 py-2 bg-color">- My Works</button>
            </div>

            <div className="col-12 col-md-6 col-lg-6 pt-4">
              <div className="d-flex justify-content-center">
                <img
                  src={hero}
                  alt="manimg"
                  className="img-fluid w-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
