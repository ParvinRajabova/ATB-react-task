import { useState } from 'react';
import User from './User';
import UserModal from './UserModal';
import classes from './Users.module.css';

const Users = ()=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userItem, setUserItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
    async function fetchUserInfo(e) {
        setModalIsOpen(true);
        const parentId = e.target.parentNode.id;
        const response = await  fetch(`https://jsonplaceholder.typicode.com/users/${parentId}`);
        const data = await response.json();
        
        setUserItem(data);
        setIsLoading(true);
    }

    const closeModalHandler = ()=>{
        setIsLoading(false);
        setModalIsOpen(false);
        setUserItem([]);
    }

    return(
        <div className={classes.container}>
            <h1 className={classes.title}>Users</h1>
        <User clickHandler={fetchUserInfo}/>
        { modalIsOpen && <UserModal userInfo={userItem} closeModal={closeModalHandler} isLoading= {isLoading}/>}
        </div>
    )
}

export default Users;