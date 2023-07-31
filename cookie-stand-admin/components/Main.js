import { useState } from "react";
import Form from "./CreateForm";

export default function Main({result,setResult}){

  
    function cookie(event) {
      event.preventDefault();
      let obj = {
        location:event.target.location.value,
        max: event.target.max.value,
        min :event.target.min.value,
        ava : event.target.ava.value
  
      }
      setResult([...result,obj])
      {console.log(result)};

     
  } 
  
      return (
        <>
        <Form cookie={cookie}/>
        </>
      )
  
   
  }