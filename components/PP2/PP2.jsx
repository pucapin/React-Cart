import { useState } from "react"
import { CardUser } from "../CardUser/CardUser";

export const PP2 = () => {

    //paso 1: Crear los estados de los inputs
    //2: onSubmit del form a la funcion de crear usuario
    //3: createUser con e.preventDefault()
    //4. Set users con ...users y el objeto del usuario

    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [users, setUsers] = useState([]);

    const createUser = (e) => {
        e.preventDefault()
        setUsers([...users, {name: inputName, email: inputEmail}])
    }

    const deleteUser = (id) => {
        // users.filter. Index y devuelve un array con los que tengan un index diferente al id.
        setUsers(users.filter((_, index) => index !== id))
    }

    const editUser = (id) => {
        const userUpdates = users.map((user, index) => {
            return index === id ? {...user, name: inputName, email: inputEmail} : user;
        })

        setUsers(userUpdates)
        // Si el index es igual al id, los datos se actualizan. Si no, se deja el user anterior. 
    }

    return(
        <>
        <form action=""
        onSubmit={createUser}>
            <input type="text"
            placeholder="Name" 
            onChange={(e) => setInputName(e.target.value)}/>

            <input type="text"
            placeholder="Email" 
            onChange={(e) => setInputEmail(e.target.value)}/>

            <button>Crear</button>
        </form>
            {users.map((user, index)=> {
                return(<CardUser user={user} index={index} deleteUser={deleteUser} editUser={editUser}></CardUser>)
            })}

        </>
    )
}