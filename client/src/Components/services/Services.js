import { useState, useEffect } from 'react'; 
import axios from 'axios';
import ServiceForm from './ServiceForm';


const Services = ({ workerId }) => {
  const [services, setServices] = useState ([])
  //delete service
  //delete in db
  //delete in the state in client

  useEffect ( () => {
    axios.get(`api/workers/${workerId}/services`)
    //leads into index.js
      .then( res => {
        //first part grabs the services from db and sets it to state
        setServices(res.data)
        //sets the frontend state from what we are pulling from the backend
      })
      .catch( err => console.log(err))
}, [])
// grab the todos from the db and set it to state
  // before it mounts

  //add service
  //add in the db
  ///add in the state in the client
const addService = (service) => {
  axios.post(`api/workers/${workerId}/services`, { service })
  //post is the verb we need because we are going to create a request
    .then(res => {
      setServices([...services, res.data])
    })
    //creates a new array of the services that are already there, pluse the new service
    .catch( err => console.log(err))
}

 //update service
  //update service in database
  //update in the state in the client
  //look in routes to see what the action verb is.
  //For this update, we'll use "put"
const updateService = (id, service) => {
  //passes in the item of the id we're updating and what we are updating (service)
  axios.put(`/api/worker/${workerId}/services/${id}`, {service })
  //intterpolates the id and updates it in the database
  .then( res => {
      let updatedServices = services.map( s => {
        if (s.id === id) {
          return res.data
          //replaces the one we are updating with the update
        }
        return s
      })  
      setServices(updatedServices)
    })
    .catch( err => console.log(err))
}
//updates the state inside of the client (above)

const deleteService = (id) => {
  //check the routes page for what verb allows to the delete action
  //include it in the axios statement below and interpolate the id
  //this will delete it in the backend (the state in the client)
  axios.delete(`api/workers/${workerId}/comments/${id}`)
    .then( res => {
      setServices( services.filter( s =>s.id !==id))
    })
    //above, we are deletig it on the frontend by  passing it through
    ///services through a filter
    //"s" references each item being filtered here. If it does not 
    //match that particular id, then it is an item I am keeping. 
    .catch( err => console.log(err))
}

return (
  <>
  </>
)
}

export default Services; 