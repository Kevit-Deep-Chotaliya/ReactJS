import { useParams } from 'react-router-dom'

function User() {

 const {userId} = useParams()
  return (
    <div className='text-2xl text-center m-4 bg-amber-200 text-amber-900'>User: {userId}</div>
  )
}

export default User