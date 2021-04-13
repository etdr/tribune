import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer (props) {


  return (
    <footer>
      <h4>©2021 Eleven Fifty Academy</h4>
      <h5>Made by Strategic Change Committee <Link to="/auth">personnel</Link></h5>
    </footer>
  )
}