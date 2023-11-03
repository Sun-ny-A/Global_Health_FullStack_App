import { FormEvent, useRef, useState } from "react";
import { Question } from "../types";

export interface QuestionInputProps {
  onPost: (newQuestion: Question) => void;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({ onPost }) => {
  const [question, setQuestion] = useState<string>("");

  const postField = useRef<HTMLInputElement>(null);

  async function makePost(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/question/', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        forum_question: postField.current!.value,
      }),
    });

    if (res.ok) {
      const newQuestion: Question = await res.json();
      console.log(newQuestion);
      onPost(newQuestion);
      postField.current!.value = "";
    } else {
      console.log('bad request');
    }
  }

  return (
    <form className="post-field"onSubmit={makePost}>
      <input className="post-input-field"
        type="text"
        name="post"
        ref={postField}
        placeholder="Ask a question"
        required
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input className="post-field-button" type="submit" value="Submit" />
    </form>
  );
};


