import React, { useEffect } from 'react'
import { useTypesSelector } from '../hooks/useTypesSelector'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../store/action-creator/user'
import { useActions } from '../hooks/useActions'

const UserList: React.FC = () => {
  const { users, error, loading } = useTypesSelector(state => state.user)
  //const dispatch = useDispatch()
  const {fetchUsers} = useActions()

  useEffect(() => {
    // dispatch<any>(fetchUsers())
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user =>
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  )
}

export default UserList;
