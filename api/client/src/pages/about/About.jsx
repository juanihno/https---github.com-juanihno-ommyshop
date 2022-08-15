import "./about.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";




const About = () => {

  return (
    <div>
      <Navbar />

    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ommy-dc67a.appspot.com/o/laura.webp?alt=media&token=d25e185b-3917-4300-854e-4c0f3a8f3108"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Hi, I'm Laura. I am the founder and designer of OMMY Surf, swimwear made by real women for real women.
Our pieces have been specifically designed to make you feel so good about yourself that you'll never want to wear anything else!
We believe in strength, confidence and beauty in every body (because, damn, who has time for anything else?)
        </p>
        <p className="a-desc">
        Our handmade collection is sustainable (yes, we are environmentalists and we will never let you forget), lively (we all need to live a little), cheeky (butt cheeks are 100% our favourite thing) and bold (it'll make you look fabulous girl, trust us). I have designed all the prints myself, we've had enough of the flowers and stripes!
We are all about respecting the ocean (again, environmental - can't help it) so our prints are dedicated to the beautiful waves of Bondi!
I may not be 100% Australian, but our materials are and they are damn good too. I can't wait to see your cheeky butt in our costumes! Laura xx
OMMY Surf
        </p>
        
      </div>
    </div>
    <div>
            <Footer/>

    </div>
    </div>


  );
};

export default About;
