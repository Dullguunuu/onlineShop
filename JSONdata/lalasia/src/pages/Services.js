import "../App.css"
import { nanoid } from "nanoid";
import { ServicesPage } from "../data/pagesData";
import { BsArrowRight } from "react-icons/bs"


const Servic = [
  {
    _id: nanoid(),
    number: "01",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "02",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "03",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "04",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "05",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "06",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
];

export const Services = () => {
  return (
    <div>
      <div className="flex flex-d align-items justify-content">
        {ServicesPage.map((data) => (
          <>
            <div className="containerTitle flex flex-d align-items justify-content">
              <h1 className="bigTitle">{data.title}</h1>
              <span className="bigText">{data.text}</span>
            </div>
            <img src={data.img} alt="" />
          </>
        ))}
      </div>
      <hr className="mt-5 mb-5" />
      <div className="flex flex-wrap row g-5">
        {Servic.map((e) => (
          <div className="col-12 col-lg-4">
            <h1 className="servicNumbers">{e.number}</h1>
            <h4 className="servicTitle fw-bold mt-3">{e.title}</h4>
            <p className="servicDesc">{e.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <span className="textCategory">Portfolio</span>
        <div className="flex justify-content-between">
          <h3 className="col-5" style={{ fontSize: "2.75rem", fontWeight: "700" }}>Amazing projext we've done before</h3>
          <div className="col-5">
            <p style={{ color: "#AFADB5" }}>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>
            <p style={{ color: "#518581" }}>View Portfolio</p>
          </div>
        </div>
        <div className="mt-5 flex justify-content-between">
          <img src={require("../assets/page/Services/Services1.png")} alt="" />
          <div className="d-flex flex-column justify-content-between">
            <img src={require("../assets/page/Services/Services2.png")} alt="" />
            <img src={require("../assets/page/Services/Services3.png")} alt="" />
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
