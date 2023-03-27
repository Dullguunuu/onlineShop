import { nanoid } from "nanoid";
import "../style/Benefits.css";

const BenefitsCard = [
  {
    _id: nanoid(),
    img: require("../assets/page/landing/benefitsCard1.png"),
    title: "Many Choices",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    _id: nanoid(),
    img: require("../assets/page/landing/benefitsCard2.png"),
    title: "Fast and On Time",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    _id: nanoid(),
    img: require("../assets/page/landing/benefitsCard3.png"),
    title: "Affordable Price",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
];

export const Benefits = () => {
  return (
    <div className="benefitsContainer flex flex-d">
      <div className="row align-items space-between">
        <div className="col-5">
          <span className="textCategory">Benefits</span>
          <h2>Benefits when using our services</h2>
        </div>
        <div className="col-5">
          <span className="benefitsText">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </span>
        </div>
      </div>
      <div className="flex space-between">
        {BenefitsCard.map((e, index) => (
          <div className="benefits" key={index}>
            <img src={e.img} alt="" />
            <h2 className="pt-4 pb-4 m-0">{e.title}</h2>
            <p className="benefitsText">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
