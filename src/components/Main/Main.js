import "./Main.css";
import aboutImage from "../../images/about_me_image.jpg";

const Main = () => {
  return (
    <main className="main">
      <section className="about">
        <img
          src={aboutImage}
          className="about__image"
          alt="A smartphone that is showing a dashboard"
        ></img>
        <div className="about__wrapper">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hey there, I'm Timothy. I'm a motivated and passionate 
            software engineer with a background in eCommerce, Quality Assurance, Application
            Delivery Management, Project Management and Trade Marketing. I have
            a bachelor's degree in Economics and Business Management and I have done a coding bootcamp called Practicum.
          </p>
          <p className="about__description">
            I’m a curious person, I love to code and I like to experiment with
            new technologies. Now coding is my passion and my professional
            career focus.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
