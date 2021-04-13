import React from 'react'

import Article from './Article'

export default function Section ({sec}) {


  return (
    <section id={`${sec.code}-section`}>
      <h2>{sec.name}</h2>
      {sec.articles.map((art, i) => <Article art={art} key={i} />)}
    </section>
  )
}