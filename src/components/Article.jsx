import React, { useEffect, useState } from 'react'


export default function Article ({art}) {

  const [instructors, setInstructors] = useState([])
  const [las, setLas] = useState([])

  useEffect(() => {
    setInstructors(art.cohort.individuals.filter(i => i.rank?.rank > 0))
    setLas(art.cohort.individuals.filter(i => i.rank?.rank === 0))
  }, [art])

  function renderNamelist (nl) {
    switch (nl.length) {
      case 0: return ''
      case 1: return `${nl[0].firstname} ${nl[0].lastname}`
      case 2: return `${renderNamelist([nl[0]])} & ${renderNamelist([nl[1]])}`
      default: return `${nl[0].firstname} ${nl[0].lastname}, ${renderNamelist(nl.slice(1))}`
    }
  }


  return (
    <article>
      <div className="article-header">
        <h3>{art.cohort.name}</h3>
        <div className="instructor-info">
          <h4><strong>{renderNamelist(instructors)}</strong></h4>
          <h4>{renderNamelist(las)}</h4>
        </div>
      </div>
      { art.title ? <p><strong>{art.title}</strong></p> : null }
      <p>{art.body}</p>
    </article>
  )
}