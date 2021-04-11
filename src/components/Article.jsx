import React from 'react'


export default function Article ({art}) {


  return (
    <article>
      <div className="article-header">
        <h3>{art.cohort.name}</h3>
        <div className="instructor-info">
          <h4><strong>{art.cohort.instructors}</strong></h4>
          <h4>{art.cohort.las}</h4>
        </div>
      </div>
      <p>{art.content}</p>
    </article>
  )
}