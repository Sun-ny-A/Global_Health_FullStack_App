import { useState } from "react";
import Heading from "../components/Heading";
import Users from "../components/Users";
import Doctors from "../components/Doctors";
import Body from "../components/Body";
import { QuestionInput } from "../components/forum/QuestionInput";
import { QuestionList } from "../components/forum/QuestionList";
import { Question } from "../components/types";
import clouds from "../assets/clouds.png";

export default function ChatPage() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const user_idString = localStorage.getItem("user_id");
  const user_id = user_idString ? parseInt(user_idString, 10) : 0;

  const handleSubmit = (newQuestion: Question) => {
    setQuestions([...questions, newQuestion]);
  }

  return (
    <div className="home-video-container">
      <Heading variant="default" />
      <img className="clouds-img" src={clouds} alt="Clouds" />
      <Body sidebar={true}>
        <Users />
        <Doctors />
        <QuestionList questions={questions} setQuestions={setQuestions} user_id={user_id}/>
        <QuestionInput onPost={handleSubmit} />
      </Body>
    </div>
  );
}

