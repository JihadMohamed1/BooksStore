
import Button from 'react-bootstrap/esm/Button';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Css/BookCategoriesComponent.css';
import req3 from '../../Services/UserServices';




export default function Users () {
   
        let [Users,setUsers]=useState([])
        useEffect(()=>{
            getUsers()
        },[])
        async function getUsers()
        {
          let result = await  req3.getAll()
          console.log(result)
          setUsers(result.data)
        }

        async function DeleteUsers(id)
        {
          await  req3.Deleteone(id)
          getUsers()
        }

    
    return (
      <div className='listbook' >
     
        <ul>
      {Users.map((User,Index)=>{
         return( <li>
           
            <Card style={{ width: '18rem' }} key={Users._id}>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{User.FName}</Card.Title>
        <Card.Title style={{textAlign:'center'}}>{User.LName}</Card.Title>
        <Card.Title style={{textAlign:'center'}}>{User.Email}</Card.Title>
      </Card.Body>
      <Card.Body>
       <Button variant="danger" onClick={()=>DeleteUsers(User._id)}>Delete</Button>
        <Button variant="success" href={`/Admin/EditUser/${User._id}`} >Modifier</Button>
      </Card.Body>
    </Card>
            </li>)  
       })}
       </ul>
       </div>
       
    )
  }

