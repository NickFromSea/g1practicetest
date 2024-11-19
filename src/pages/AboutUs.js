import aboutUsPic from '../resources/pexels-photo-8730289.jpeg';
import '../AboutUs.css';


function AboutUs(){
    return (
     <div className='container_aboutUs'>
        <img src={aboutUsPic} alt = "our team" className='aboutUsPic'/>
      <h2>About us</h2>
      <p>
       Welcome to our website — a platform for testing and improving your
       knowledge of traffic rules! We are committed to helping everyone
       preparing for the driving license exam or simply wanting to refresh their
       road knowledge. Our goal is to make learning safe and confident driving
       accessible to everyone.
      </p>
      <h3>Our Features</h3>
      <p>
       We offer interactive quizzes tailored to the latest traffic regulations,
       including updated laws and the newest road signs. Our tests cover all the
       essential topics, including:
      </p>
      <ul>
       <li>Basic traffic regulations</li>
       <li>Road signs and markings</li>
       <li>Traffic safety fundamentals</li>
       <li>Intersection rules and right-of-way situations</li>
       <li>Basics of first aid</li>
      </ul>
      <h3>Why Choose Us?</h3>
      <ul>
       <li>
        Up-to-date questions: Our quizzes are regularly updated to reflect the
        latest changes in traffic laws.
       </li>
       <li>
        Interactive learning: Our tests are designed to help you understand the
        material and learn from your mistakes effectively.
       </li>
      </ul>
      <p>
       Our website is an excellent resource for both new drivers and experienced
       ones who want to stay updated on traffic rules and enhance their
       knowledge. We are confident that regular quizzes will not only help you
       pass your exam but also help you feel more confident on the road.
      </p>
     </div>
    );
}

export default AboutUs;