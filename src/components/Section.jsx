import React from 'react'

import Article from './Article'

export default function Section ({sec}) {


  return (
    <section id={`${sec.sid}-section`}>
      <h2>{sec.name}</h2>
      {sec.articles.map(art => <Article art={art} />)}
    </section>
  )
}