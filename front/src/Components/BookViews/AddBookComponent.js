import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import req from '../../Services/BookServices';
import req2 from '../../Services/CatigorieServices';

export default function AddBook() {
    const[nom,SetNom]=useState("")
    const[description,Setdescription]=useState("")
    const[isbn,Setisbn]=useState("")
    const[auteur,Setauteur]=useState("")
    const[editeur,Setediteur]=useState("")
    const[date_edition,Setdate_edition]=useState("")
    const[img,Setimg]=useState("")
    const[category,Setcategory]=useState([])
    const[selectcat,SetSelectcat]=useState(0)
    const navigate=useNavigate()
  
    useEffect(()=>{
      getCatigories()
  },[])
  
    async function getCatigories()
    {
      const tmp=await req2.getAll()
      Setcategory(tmp.data)
    }
  
    
    async function SubmitBook(e)
    {e.preventDefault()
      try{
        
        const p={
          "nom":nom,
          "description":description,
          "isbn":isbn,
          "auteur":auteur,
          "editeur":editeur,
          'date_edition':date_edition,
          "Catigorie":category[selectcat]
        }
        console.log(p)
      await req.Addone(p)
      navigate("/")
      }catch(e)
      {
         console.log(e)
      }
    
    }
    return (
      <Form onSubmit={SubmitBook}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Book name" value={nom}  onChange={(e)=>SetNom(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Book description" value={description}  onChange={(e)=>Setdescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Isbn</Form.Label>
          <Form.Control type="text" placeholder="Enter Book isbn" value={isbn}  onChange={(e)=>Setisbn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Auteur</Form.Label>
          <Form.Control type="text" placeholder="Enter Book auteur" value={auteur}  onChange={(e)=>Setauteur(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Editeur</Form.Label>
          <Form.Control type="text" placeholder="Enter Book editeur" value={editeur}  onChange={(e)=>Setediteur(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Date edition</Form.Label>
          <Form.Control type="Date" placeholder="Enter Book date edition" value={date_edition}  onChange={(e)=>Setdate_edition(e.target.value)} />
        </Form.Group>
        <Form.Label>Categorie</Form.Label>
      <Form.Select  onChange={(e)=>SetSelectcat(e.target.value)}>
      {category.map((cat,Index)=>{
        return(
        <option key={Index} value={Index}>{cat.nom}</option>
        )
      })}

      </Form.Select>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}
