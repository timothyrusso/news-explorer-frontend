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
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about__description">
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
