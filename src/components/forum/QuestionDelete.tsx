interface DeleteFormProps {
  question_id: number;
  onDelete: () => void;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ question_id, onDelete }) => {
  const handleDelete = async () => {
    const res = await fetch(`http://127.0.0.1:5000/question/${question_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (res.ok) {
      onDelete();
    } else {
      window.alert('Delete Failed: You are not authorized to delete this post.');
    }
  };

  return (
    <button className ="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteForm


