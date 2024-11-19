import "../App.css";
import trafficLight from '../resources/trafficlight.jpg';
import familyInCar from '../resources/famelyincar.jpg';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
     navigate("./Test");
    };

    return (
     <div className="home-container">
      <h1 className="home-header">
       Welcome to the Traffic Rules Test Website!
      </h1>
      <div className="home-container-intro">
       <img
        src={trafficLight}
        alt="traffic light"
        className="traffic-light-pic"
       />
       <p className="home-intro">
        Knowing traffic rules is the key to safety on the road! We offer you a
        convenient way to test and improve your knowledge. Our tests are
        designed according to the latest updates of the traffic regulations and
        help you effectively prepare for exams, as well as maintain your driving
        skills at a high level.
       </p>
      </div>
      <div className="home-container-intro">
       <ul className="ul-home">
        <li>Free tests for drivers of all categories</li>
        <li>Questions, highly similar to actual exam tasks</li>
        <li>Immediate results</li>
       </ul>
       <img src={familyInCar} alt="inside car" className="family-in-car"
       />
      </div>
      <button className="btn-start-test" onClick={handleButtonClick}>Start Test</button>
     </div>
    );
}
export default Home;
