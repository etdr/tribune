import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function TribunePoster (props) {

  const [tribune, setTribune] = useState({})

  const [volume, setVolume] = useState(0)
  const [issue, setIssue] = useState(0)
  const [title, setTitle] = useState('')
  const [intro, setIntro] = useState('')
  const [outro, setOutro] = useState('')


  async function fetchLatestTribune () {
    const result = await (await fetch('http://localhost:3110/t/all', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })).json()
    setTribune(result[0] || {})
    setVolume(result[0].volume)
    setIssue(result[0].issue + 1)
  }

  useEffect(() => {
    fetchLatestTribune()
  }, [])

  async function onSubmit (event) {
    event.preventDefault()
    const result = await fetch('http://localhost:3110/t', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.token}`,
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <form className="poster" onSubmit={e => onSubmit(e)}>
      <h3>Tribune Poster</h3>

      <div className="poster-field p-field1">
        <p className="p-field-title">Volume</p>
        <p className="p-field-subtitle">default: same as last</p>
      </div>
      <input
        className="poster-input p-input1"
        value={volume.toString()}
        onChange={e => setVolume(parseInt(e.target.value))} />

      <div className="poster-field p-field2">
        <p className="p-field-title">Issue</p>
        <p className="p-field-subtitle">default: incrementing by one</p>
      </div>
      <input
        className="poster-input p-input2"
        value={issue.toString()}
        onChange={e => setIssue(parseInt(e.target.value))} />


    </form>
  )
}