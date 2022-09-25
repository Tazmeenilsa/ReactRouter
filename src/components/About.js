import React from 'react'
import { useParams } from 'react-router-dom';
export default function About() {
   // useParams parameter lakar dega 
  // UseMatch
  
  let {subId } = useParams();   
  return (
    <div>
    <h1>{subId}</h1>
  </div>
  )
}
