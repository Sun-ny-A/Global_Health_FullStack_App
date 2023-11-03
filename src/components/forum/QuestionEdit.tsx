import React, { useState } from "react";

interface QuestionEditProps {
  question_id: number
  onEdit: () => void
}

const QuestionEdit: React.FC<QuestionEditProps> = ({ question_id, onEdit }) => {
  const [updatedData, setUpdatedData] = useState<string>("")

  const handleEdit = async () => {
    const res = await fetch(`http://127.0.0.1:5000/question/${question_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        forum_question: updatedData,
      }),
    });

    if (res.ok) {
      onEdit();
      setUpdatedData("");
    } else {
      window.alert('Edit Failed: You are not authorized to edit this post.')
    }
  }

  return (
    <div>
      <input className="edit-field"
        type="text"
        placeholder="Edit your post"
        value={updatedData}
        onChange={(e) => setUpdatedData(e.target.value)}
      />
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
    </div>
  )
}

export default QuestionEdit

