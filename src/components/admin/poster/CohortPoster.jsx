import React, { useState } from 'react'

export default function CohortPoster (props) {

  const [program, setProgram] = useState('wd')
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')


  async function onSubmit (event) {
    event.preventDefault()

    const body = JSON.stringify({
      program,
      name,
      startDate
    })

    const result = await (await fetch('http://localhost:3110/c', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.token}`,
        'Content-Type': 'application/json'
      },
      body
    })).json()

    
  }
  
  return (
    <form className="poster" onSubmit={e => onSubmit(e)}>
      <h3>Cohort Poster</h3>

      <div className="poster-field p-field1">
        <p className="p-field-title">Program</p>
        <p className="p-field-subtitle">contact Eli if it isn't listed</p>
      </div>
      <select
        className="poster-input p-input1"
        value={program}
        onChange={e => setProgram(e.target.value)}>
        <option value="wd">Web Development</option>
        <option value="sd">Software Development</option>
        <option value="cy">Cybersecurity</option>
        <option value="ux">UX/UI</option>
      </select>

      <div className="poster-field p-field2">
        <p className="p-field-title">Cohort Number</p>
        <p className="p-field-subtitle">e.g. "68" or "70B"</p>
      </div>
      <input
        className="poster-input p-input2"
        value={name}
        onChange={e => setName(e.target.value)} />

      <div className="poster-field p-field3">
        <p className="p-field-title">Start Date</p>
        <p className="p-field-subtitle">eventually will come in handy</p>
      </div>
      <input
        className="poster-input p-input3"
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)} />

      <button className="submit-button p-cohort-submitter">Post Cohort</button>

    </form>
  )
}