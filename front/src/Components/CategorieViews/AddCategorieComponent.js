import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import req from '../../Services/BookServices';
import req2 from '../../Services/CatigorieServices';

export default function AddCategorie() {
    const[nom,SetNom]=useState("")
    const navigate=useNavigate()
  
    async function SubmitCategorie(e)
    {e.preventDefault()
      try{
        
        const p={
          "nom":nom,

        }
        console.log(p)
      await req2.Addone(p)
      navigate("/")
      }catch(e)
      {
         console.log(e)
      }
    
    }
    return (
      <Form onSubmit={SubmitCategorie}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Book name" value={nom}  onChange={(e)=>SetNom(e.target.value)} />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}
