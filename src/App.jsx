import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import Tribune from './components/Tribune'
import Footer from './components/Footer'
import Admin from './components/admin/Admin'
import Auth from './components/auth/Auth'

function App () {

  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [admin, setAdmin] = useState(false)

  const [tribune, setTribune] = useState({})

  function processRawTribune (rt) {
    return {
      id: rt.id,
      volume: rt.volume,
      issue: rt.issue,
      date: new Date(rt.date),
      title: rt.title,
      intro: rt.intro,
      outro: rt.outro,

      programs: {
        wd: {
          code: 'wd',
          name: 'Web Development',
          posts: rt.posts.filter(p => p.cohort.program === 'wd')
        },
        sd: {
          code: 'sd',
          name: 'Software Development',
          posts: rt.posts.filter(p => p.cohort.program === 'sd')
        },
        cy: {
          code: 'cy',
          name: 'Cybersecurity',
          posts: rt.posts.filter(p => p.cohort.program === 'cy')
        },
        ux: {
          code: 'ux',
          name: 'UX/UI',
          posts: rt.posts.filter(p => p.cohort.program === 'ux')
        }
      }
    }
  }

  async function fetchLatestTribune (localToken) {
    const result = await (await fetch('http://localhost:3110/t/newest', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localToken}`
      }
    })).json()
    // setRawTribune(result)
    setTribune(processRawTribune(result))
  }


  useEffect(() => {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      setEmail(localStorage.getItem('email'))
      setAdmin(localStorage.getItem('role') === 'admin')
      setToken(localToken)
      fetchLatestTribune(localToken)
    }
  }, [])

  

  return (
    <div className="App">
      <BrowserRouter>
      
      
      

        <Switch>
          <Route path="/admin">
            <Admin email={email} admin={admin} token={token} />
          </Route>
          <Route path="/auth">
            <Auth token={token} setToken={setToken} setEmail={setEmail} setAdmin={setAdmin} />
          </Route>
          <Route path="/">
            <h1 id="maintitle">Learning Team Tribune</h1>
            <div id="info">
              <div id="info-line1">
              <h2 id="edition">Volume {tribune?.volume}, Issue {tribune?.issue}</h2>
              <div className="info-spacer"></div>
                <h2 id="date">{tribune?.date?.toISOString()}</h2>
              </div>
              <div className="info-spacer"></div>
              <div id="info-line2">
                {tribune.title ? <h2 id="title">{tribune?.title}</h2> : null}
              </div>
            </div>
            <Tribune programs={tribune.programs} intro={tribune.intro} outro={tribune.outro} />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>

      
    </div>
  )
}

export default App
