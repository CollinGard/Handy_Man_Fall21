import { useState } from 'react';
import WorkerForm from './WorkerForm';
//import Comments from '../Comments/Comments';

const Worker = ({ id, first_name, last_name, phone_number, deleteWorker, updateWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {first_name}
        <br />
        {last_name}
        <br />
        {phone_number}
        {
          editing ?
          <>
            <WorkerForm
              id={id}
              first_name={first_name}
              last_name={last_name}
              phone_number={phone_number}
              updateWorker={updateWorker}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteWorker(id)}>Delete</button>
      </li>
      
    </>
  )
}

export default Worker;