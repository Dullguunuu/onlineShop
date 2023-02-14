import { nanoid } from "nanoid";
import "../App.css";

const testimonials = [
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
];

export const Testimonial = () => {
  return (
    <div className="testimonials mt-5">
      <div className="testimonialsDesc col-md-7">
        <span className="testimonialsTitle">Testimonials</span>
        <h1>What our customer say</h1>
        <span style={{ color: "#AFADB5" }}>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </span>
      </div>
      <div className="pidback">
        <div className="pidbackCard d-flex gap-4 overflow-auto">
          {testimonials.map((e, index) => (
            <div key={index} className="col-12 col-md-5 feedbackCard p-4 mt-5">
              <img key={e._id} src={e.img} alt="check img" />
              <p style={{ color: "#AFADB5" }} className="mt-4 mb-4">{e.text}</p>
              {e.user.map((avatar, index) => (
                <div key={index} className="flex justify-content-between">
                  <div>
                    <img
                      key={avatar._id}
                      src={avatar.avatar}
                      alt="avatar img"
                    />
                    <span className="ms-3">{avatar.name}</span>
                  </div>
                  <div>
                    <img src={avatar.star} alt="star" />
                    <span className="ms-2">{avatar.starNumber}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
