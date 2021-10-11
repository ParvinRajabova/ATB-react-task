import { useEffect, useState } from "react";
import classes from './User.module.css';

const UserItem = (props)=>{
    const [state, setState] = useState([]);
   
    useEffect( ()=>{
        async function fetchUserNameList(){
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setState(data);
        }
        fetchUserNameList()
    } ,[]);

    return(
        <div>
            <ul className={classes.userList}>
                {state.map((item)=>{
                return (<li className={classes.userItem}  key={item.id} id={item.id}>
                    {item.name} 
                    <button onClick={props.clickHandler} >More</button>
                </li>)
                })
                }
            </ul>
            
        </div>
    )
}

export default UserItem;