import React, { useEffect } from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import { Question } from "../types";
import DeleteForm from './QuestionDelete';
import QuestionEdit from "./QuestionEdit";

interface QuestionListProps {
    questions: Question[];
    setQuestions: (questions: Question[]) => void;
    user_id: number;
}

export const QuestionList: React.FC<QuestionListProps> = ({ questions, setQuestions }) => {

    useEffect(() => {
        getQuestions();
    }, []);

    async function getQuestions() {
        const res = await fetch('http://127.0.0.1:5000/question/', {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        if (res.ok) {
            const questionsData: Question[] = await res.json();
            setQuestions(questionsData);
        } else {
            console.log('Bad request on getting questions');
        }
    }

    return (
        <Container>
            <h2 className="dis-title">Discussion Board</h2>
            <ForumIcon className="icon" style={{ fontSize: '4rem', textAlign: 'center' }} />
            <div className="ques-div">
                {questions.length > 0 &&
                    questions.map((question) => (
                        <Card className="ques-card" key={question.id} variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {question.forum_question}
                                </Typography>
                                <br />
                                <Typography variant="body2">
                                    Timestamp: {new Date(question.timestamp).toLocaleString()} <br /> User ID: {question.user_id}
                                </Typography>
                                <div className="button-div">
                                <QuestionEdit
                                    question_id={question.id}
                                    onEdit={() => getQuestions()}
                                />
                                <DeleteForm
                                    question_id={question.id}
                                    onDelete={() => getQuestions()}
                                />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </Container>
    );
};





