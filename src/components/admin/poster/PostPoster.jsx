import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

export default function PostPoster (props) {

  const [tribunes, setTribunes] = useState([])  
  const [cohorts, setCohorts] = useState([])

  const [date, setDate] = useState(new Date())
  const [title, setTitle] = useState('')
  const [tid, setTid] = useState(0)
  const [cid, setCid] = useState(0)
  // emoji, setEmoji
  const [content, setContent] = useState('')


  async function fetchTribunes () {
    const result = await (await fetch('http://localhost:3110/t/all', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })).json()
    setTribunes(result)
    setTid(result[result.length - 1].id)
  }

  async function fetchCohorts () {
    const result = await (await fetch('http://localhost:3110/c/all', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })).json()
    setCohorts(result)
    setCid(result[result.length - 1].id)
  }

  useEffect(() => {
    fetchTribunes()
    fetchCohorts()
  }, [])


  async function onSubmit (event) {
    event.preventDefault()
    const result = await fetch('http://localhost:3110/p', {
      method: 'POST'
    })
  }


  if (!props.token) return <Redirect to="/" />

  return (
    <form className="poster" onSubmit={e => onSubmit(e)}>
      <h3>Post Poster</h3>

      <div className="poster-field p-field1">
        <p className="p-field-title">Date</p>
        <p className="p-field-subtitle">leave blank for current datetime</p>
      </div>
      <input
        className="poster-input p-input1"
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)} />

      <div className="poster-field p-field2">
        <p className="p-field-title">Title</p>
        <p className="p-field-subtitle">optional</p>
      </div>
      <input
        className="poster-input p-input2"
        value={title}
        onChange={e => setTitle(e.target.value)} />

      {/* <div className="poster-field p-field3">
        <p className="p-field-title">Emoji</p>
        <p className="p-field-subtitle">forthcoming</p>
      </div> */}
      {/* <div className="poster-input p-input3">
        <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
      </div> */}

      <div className="poster-field p-field3">
        <p className="p-field-title">Tribune</p>
        <p className="p-field-subtitle">sorted reverse chronologically</p>
      </div>
      <select
        className="poster-input p-input3"
        value={tid}
        onChange={e => setTid(e.target.value)} >
        {tribunes.map(t => <option value={t.id} key={t.id}>Volume {t.volume}, Issue {t.issue} ({t.date})</option>)}
      </select>

      <div className="poster-field p-field4">
        <p className="p-field-title">Cohort</p>
        <p className="p-field-subtitle">will organize this better soon</p>
      </div>
      <select className="poster-input p-input4">
        {cohorts.map(c => <option value={c.id} key={c.id}>{`${c.program.toUpperCase()} ${c.name}`}</option>)}
      </select>

      <div className="poster-field p-field5">
        <p className="p-field-title">Content</p>
        <p className="p-field-subtitle">the post itself;</p>
        <p className="p-field-subtitle">markdown coming soon</p>
      </div>
      <textarea
        className="poster-input p-post-content"
        value={content}
        onChange={e => setContent(e.target.value)} />

      <button type="submit" className="submit-button p-post-submitter">Post Post</button>
    </form>
  )

}