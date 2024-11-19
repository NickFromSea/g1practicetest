import { data } from "../resources/data";
import { useState } from "react";
import "../App.css";
import { showPopupCorrect } from "./ShowPopupCorrect";

function RandomQuestion() {
 const [randomQuestion, setRandomQuestion] = useState(null);

 const getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * data.length);
  setRandomQuestion(data[randomIndex]);
 };

 const [selectedOption, setSelectedOption] = useState("");

 const [isCorrect, setIsCorrect] = useState(null);

 const handleOptionChange = (event) => {
  const selectedValue = event.target.value;
  setSelectedOption(selectedValue);

  if (selectedValue === randomQuestion.correctAnswer) {
   setIsCorrect(true);
  } else {
   setIsCorrect(false);
  }

  setTimeout(()=>{
    setIsCorrect(null);},1000);
 };


 return (
  <div className="App">
   <h1 className="header_quest">Let's test your knowledge of the rules of the road. </h1>
   {randomQuestion && (
    <div className="current_question">
     <h2>{randomQuestion.name}</h2>

     <img src={randomQuestion.image} alt="picture_question" className="questPic"/>

     <label>
      <input
       type="radio"
       value={randomQuestion.question1}
       checked={selectedOption === randomQuestion.question1}
       onChange={handleOptionChange}
      />
      {randomQuestion.question1}
     </label>

     <label>
      <input
       type="radio"
       value={randomQuestion.question2}
       checked={selectedOption === randomQuestion.question2}
       onChange={handleOptionChange}
      />
      {randomQuestion.question2}
     </label>
     <label>
      <input
       type="radio"
       value={randomQuestion.question3}
       checked={selectedOption === randomQuestion.question3}
       onChange={handleOptionChange}
      />
      {randomQuestion.question3}
     </label>
     <label>
      <input
       type="radio"
       value={randomQuestion.question4}
       checked={selectedOption === randomQuestion.question4}
       onChange={handleOptionChange}
      />
      {randomQuestion.question4}
     </label>
    </div>
   )}

   {isCorrect !== null && (
    <p>
     {isCorrect
      ? showPopupCorrect("Good job!", "your answer is correct", "success", "OK")
      : showPopupCorrect(
         "Fail",
         "your answer is NOT correct",
         "error",
         "Try again"
        )}
    </p>
   )}
   <button onClick={getRandomQuestion} className="button_next">
    {randomQuestion ? "Next random question" : "Random question"}
   </button>

  </div>
 );
}
export default RandomQuestion;
