import { useState } from 'react';
import ServiceForm from './ServiceForm';
const Service = ({ worker_id, job_type, cost, date, deleteService, updateService }) => {
  const [editing, setEdit] = useState(false)
  //means that initially, it's not editing.
  //if editing is true, then form will be passed
  return (
    <>
      <li>
        {job_type}
        <br />
        {cost}
        {
          editing ?
          <>
            <ServiceForm
              id={worker_id}
          job_type={job_type}
          cost={cost}
          updateService={updateService}
          setEdit={setEdit}
        />
      </>
        :
        <button onCLick={() => setEdit(true)}>Edit</button>
      }
      <button onClick={() => deleteService(worker_id)}>Delete</button>
     </li>
    </>
  )
}
export default Service;