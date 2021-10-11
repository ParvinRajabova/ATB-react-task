
import classes from './UserModal.module.css';

const UserModal = (props)=>{
  const eachUserInfo = props.userInfo;
    const address = eachUserInfo.address;
    
 
    return(
        <div className={classes.modalBackground}>
            <div className={classes.modalContainer}>
                <button className={classes.closeIcon} onClick={props.closeModal}>X</button>
                {props.isLoading  &&
                <div className={classes.modalContext}>
                    <h2><span>Name:</span> {eachUserInfo.name}</h2>
                    <h4><span>Username:</span> {eachUserInfo.username}</h4>
                    <a href={`mailto:${eachUserInfo.email}`}><span>Email:</span> {eachUserInfo.email}</a>
                    <div className={classes.addressBox}>
                       <p><span>Address: </span>  {address.street}, {address.suite}, {address.city} - {address.zipcode} </p>
                       <div>
                            <span>Coordinates: </span> 
                            <a href={`https://www.google.com/maps/@${address.geo.lat},${address.geo.lng}`} target="_blank" rel="noreferrer noopener">{address.geo.lat},{address.geo.lng}</a>
                        </div>
                    </div>
                </div>
                }

               {!props.isLoading && <p className={classes.loadingInfo}>Loading...</p>}
            </div>

        </div>
    )
}

export default UserModal;