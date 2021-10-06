import { useState, useEffect } from "react";

const ServiceForm = ({addService, id, job_type, cost, date, updateService, setEdit}) => {
  const [service, setService] = useState({ job_type: "", cost: "", date: ""})

useEffect ( () => {
  if (id) {
    setService({ job_type, cost, date })
  }
}, [])

const handleSubmit = (e) => {
  e. preventDefault()
  if (id) {
    updateService(id, service)
    setEdit(false)
  } else {
      addService(service)
  }
  setService({job_type: "", cost: "", date: ""})
}

return (
  <>
    <form onSubmit={handleSubmit}>
      <input
        name="job_type"
        value={service.job_type}
        onChange={(e) => setService({...service, job_type: e.target.value })}

        required
        placeholder= "Job_Type"
        />

        <input
        name="cost"
        value={service.cost}
        onChange={(e) => setService({...service, cost: e.target.value})}

        required
        placeholder="Cost"
        />
        
        <input
        name="date"
        value={service.date}
        onChange={(e) => setService({...service, date: e.target.value})}

        required
        placeholder="Date"
        />

        <button type="submit">Submit</button>
      </form>
  </>
)
}
export default ServiceForm;