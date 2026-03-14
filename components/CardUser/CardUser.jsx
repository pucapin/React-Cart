export const CardUser = ({user, index, deleteUser, editUser}) => {
    return(
                <div key={index}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <button onClick={() => deleteUser(index)}>delete user</button>
                <button onClick={()=> editUser(index)}>Edit User</button>
                </div>
    )
}