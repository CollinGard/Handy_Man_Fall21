import Worker from './Worker';

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <>
      <ul>
        {
          workers.map( t => 
            <Worker 
              {...t} 
              deleteWorker={deleteWorker} 
              updateWorker={updateWorker}
            />
          )
        }
      </ul>
    </>
  )
}

export default WorkerList;