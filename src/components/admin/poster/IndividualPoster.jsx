import React, { useEffect, useState } from 'react'

export default function IndividualPoster (props) {
  
  const [ranks, setRanks] = useState([])
  const [cohorts, setCohorts] = useState([])

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [rid, setRid] = useState(0)
  const [cid, setCid] = useState(null)
  
  async function fetchRanks () {
    const result = await (await fetch('http://localhost:3110/r/all', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })).json()
    setRanks(result)
    setRid(0)
  }

  async function fetchActiveCohorts () {
    const result = await (await fetch('http://localhost:3110/c/all?active=true', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })).json()
    setCohorts(result)
    setCid(null)
  }

  useEffect(() => {
    fetchRanks()
    fetchActiveCohorts()
  }, [])



  async function onSubmit (event) {
    event.preventDefault()

    const result = await (await fetch('http://localhost:3110/i', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        individual: {
          firstname,
          lastname,
          cohortId: cid,
          rankId: rid
        }
      })
    })).json()
  }

  return (
    <form className="poster" onSubmit={e => onSubmit(e)}>
      <h3>Individual Poster</h3>

      <div className="poster-field p-field1">
        <p className="p-field-title">First Name</p>
        <p className="p-field-subtitle">include middle here if desired</p>
      </div>
      <input
        className="poster-input p-input1"
        value={firstname}
        onChange={e => setFirstname(e.target.value)} />

      <div className="poster-field p-field2">
        <p className="p-field-title">Surname</p>
        <p className="p-field-subtitle">the one that isn't first (通常)</p>
      </div>
      <input
        className="poster-input p-input2"
        value={lastname}
        onChange={e => setLastname(e.target.value)} />

      <div className="poster-field p-field3">
        <p className="p-field-title">Rank</p>
        <p className="p-field-subtitle">i.e., their official title</p>
      </div>
      <select className="poster-input p-input3">
        {ranks.map(r => <option value={r.id} key={r.id}>{r.title}</option>)}
      </select>

      <div className="poster-field p-field4">
        <p className="p-field-title">Cohort</p>
        <p className="p-field-subtitle">i.e., their current assignment</p>
      </div>
      <select
        className="poster-input p-input4"
        value={null}
        onChange={e => setCid(e.target.value)}>
        <option value={null}>null assignment</option>
        {cohorts.map(c => <option value={c.id} key={c.id}>{`${c.program.toUpperCase()} ${c.name}`}</option>)}
      </select>

      <button className="submit-button p-individual-submitter">Post Individual</button>
    </form>
  )
}