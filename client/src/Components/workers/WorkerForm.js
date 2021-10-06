import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, first_name, last_name, phone_number, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ frist_name: "", last_name: "",})

  useEffect( () => {
    if (id) {
      setWorker({ first_name, last_name, phone_number })
      // setTodo({ title: title, complete: complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ first_name: "", last_name: "", phone_number: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="first_name"
          value={worker.first_name}
          onChange={(e) => setWorker({...worker, first_name: e.target.value })}

          required
          placeholder="FirstName"
        />
        <input
          name="last_name"
          value={worker.last_name}
          onChange={(e) => setWorker({...worker, last_name: e.target.value})}
          
        />
        <input
          name="phone_number"
          value={worker.phone_number}
          onChange={(e) => setWorker({...worker, phone_number: e.target.value})}
          
        />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default WorkerForm;