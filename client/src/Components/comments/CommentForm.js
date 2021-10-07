import { useState, useEffect } from "react";
const CommentForm = ({addComment, id, job_type, cost, date, updateComment, setEdit}) => {
  const [comment, setComment] = useState({ topic: "", description: "", address: ""})
useEffect ( () => {
  if (id) {
    setComment({ topic, description, address })
  }
}, [])
const handleSubmit = (e) => {
  e. preventDefault()
  if (id) {
    updateCOmment(id, comment)
    setEdit(false)
  } else {
      addComment(comment)
  }
  setComment({topic: "", description: "", address: ""})
}
return (
  <>
    <form onSubmit={handleSubmit}>
      <input
        name="topic"
        value={comment.topic}
        onChange={(e) => setComment({...comment, topic: e.target.value })}
        required
        placeholder= "Topic"
        />
        <input
        name="description"
        value={comment.description}
        onChange={(e) => setComment({...comment, description: e.target.value})}
        required
        placeholder="Description"
        />
        <input
        name="address"
        value={comment.address}
        onChange={(e) => setComment({...comment, address: e.target.value})}
        required
        placeholder="Address"
        />
        <button type="submit">Submit</button>
      </form>
  </>
)
}
export default CommentForm;