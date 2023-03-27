import { PeopleCard } from "../data/aboutUsData";
import { AboutUsPage } from "../data/pagesData";
import "../App.css";
import { BsArrowRight } from "react-icons/bs"

export const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-d align-items justify-content">
        {AboutUsPage.map((data) => (
          <>
            <div className="containerTitle flex flex-d align-items justify-content">
              <h1 className="bigTitle">{data.title}</h1>
              <span className="bigText">{data.text}</span>
            </div>
            <img src={data.img} alt="" />
          </>
        ))}

        <div className="row gap-5 mt-5">
          <span className="textCategory">Our Mission</span>
          <div className="col">
            <h2 style={{ fontSize: "2.75rem" }}>Our team dedicated to help find smart home product</h2>
            <div className="flex justify-content-between mt-5">
              <div className="">
                <p className="statisticNumbers">20+</p>
                <p className="numbersDesc">Years Experience </p>
              </div>
              <div className="">
                <p className="statisticNumbers">483</p>
                <p className="numbersDesc">Happy Client </p>
              </div>
              <div className="">
                <p className="statisticNumbers">150+</p>
                <p className="numbersDesc">Project Finished</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flex gap-3 mb-4">
              <img src={require("../assets/icon-img/Group 15.png")} alt="" style={{ objectFit: "none" }} />
              <div>
                <p className="aboutUsSubTitle">24/7 supports</p>
                <p className="aboutUsSubTitleDesc">24/7 support means a support service that is provided 24 hours a
                  day and 7 days a week.</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <img src={require("../assets/icon-img/Group 16.png")} alt="" style={{ objectFit: "none" }} />
              <div>
                <p className="aboutUsSubTitle">Free Consultation</p>
                <p className="aboutUsSubTitleDesc">A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <img src={require("../assets/icon-img/Group 17.png")} alt="" style={{ objectFit: "none" }} />
              <div>
                <p className="aboutUsSubTitle">Overall Guarantee</p>
                <p className="aboutUsSubTitleDesc">The comprehensive guarantee is required for import, warehousing, transit, processing and specific use. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <span className="textCategory">Our Team</span>
          <div className="flex justify-content-between mt-3">
            <div className="col-5">
              <h2 style={{ fontWeight: "700", fontSize: "2.75rem" }}>Meet our leading and strong team</h2>
            </div>
            <div className="col-5">
              <span style={{ color: "#AFADB5" }}>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </span>
            </div>
          </div>
          <div className="row mt-5">
            {PeopleCard.map((card) => (
              <div className="col-12 col-md-4">
                <img src={card.img} alt="" />
                <p className="teamMembersName mt-4">{card.name}</p>
                <p className="teamMembersPosition">{card.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 flex justify-content-between">
        <h1 className="col-4">Are you interested work with us? </h1>
        <button>Let's Talk <BsArrowRight /></button>
      </div>
    </div >
  );
};
