import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
const Comments = ({ workerId }) => {
  const [comments, setComments] = useState ([])
  useEffect ( () => {
    axios.get(`api/services/${serviceId}/comments`)
      .then( res => {
        setComments(res.data)
      })
      .catch( err => console.log(err))
}, [])
const addComment = (comment) => {
  axios.post(`api/services/${serviceId}/comments`, { comment })
    .then(res => {
      setServices([...services, res.data])
    })
    .catch( err => console.log(err))
}
const updateComment = (id, comment) => {
  axios.put(`/api/service/${serviceId}/comments/${id}`, {comment })
  .then( res => {
      let updatedComments = comments.map( c => {
        if (c.id === id) {
          return res.data
        }
        return c
      })
      setComments(updatedComments)
    })
    .catch( err => console.log(err))
}
const deleteComment = (id) => {
  axios.delete(`api/servicess/${serviceId}/comments/${id}`)
    .then( res => {
      setComments( comments.filter( c =>c.id !==id))
    })
    .catch( err => console.log(err))
}
return (
  <>
  </>
)
}
export default Comments;