import "../App.css";
import "../style/Landing.css";

export const OurProduct = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-6">
          <div className="outProduct flex flex-d ">
            <span className="ourProductSubTitle mb-1">Our product</span>
            <h2 className="ourProductTitle mb-5">Crafted by talented and high quality material</h2>
            <span className="ourProductDesc mb-5">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui tincidunt pulvinar</span>
            <button className="boxGreen mb-5">Learn More</button>
          </div>
          <img src={require("../assets/page/landing/outProduct.jpg")} alt="" />
        </div>
        <div className="col-6">
          <div className="flex flex-d justify-content-between">
            <div className="statistics flex justify-content-end gap-5 mb-5">
              <div className="flex flex-d">
                <span className="statisticNumbers">20+</span>
                <span className="numbersDesc">Years Experience</span>
              </div>
              <div className="flex flex-d">
                <span className="statisticNumbers">483</span>
                <span className="numbersDesc">Happy Client</span>
              </div>
              <div className="flex flex-d">
                <span className="statisticNumbers">150+</span>
                <span className="numbersDesc">Project Finished</span>
              </div>
            </div>
            <img src={require("../assets/page/landing/outProduct2.jpg")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
