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

  const [tribune, setTribune] = useState({
    volume: 1,
    issue: 1,
    date: '2021-04-10',
    title: 'Inaugural Edition',
    intro: 'Enjoy reading this! We poured so much effort into it and really think it could benefit you. But don\'t take *my* word for it...',
    outro: 'peace dog',

    content: {
      wd: {
        code: 'wd',
        name: 'Web Development',
        articles: [
          {
            cohort: {
              name: "70B",
              instructors: "Eli T. Drumm",
              las: "Summer Kerkeres, Hustin Jeffers, Shane Cox, Cris Matson & Tristan Oshier"
            },
            content: "This past week was project week, the moment when all the hard work of the badge comes together. Seeing the classes projects turn out, all deployed to the internet and working is the highlight. Every class feels like a journey and we get to celebrate making it two thirds of the way through the program. It is times like this that make Teaching worth it."
          },
          {
            cohort: {
              name: "70A",
              instructors: "Rob Vanarsdall",
              las: "Amruta Kanvinde, Marco Lopez, Nav Loveday, Ellie Hong & Kayla Bullard"
            },
            content: "This past week was project week, the moment when all the hard work of the badge comes together. Seeing the classes projects turn out, all deployed to the internet and working is the highlight. Every class feels like a journey and we get to celebrate making it two thirds of the way through the program. It is times like this that make Teaching worth it."
          },
          {
            cohort: {
              name: "75",
              instructors: "Zach Maynard & Tayor Dickens",
              las: "Xzavier Dunn, Adam Clouse, Britany Magee"
            },
            content: "This past week was project week, the moment when all the hard work of the badge comes together. Seeing the classes projects turn out, all deployed to the internet and working is the highlight. Every class feels like a journey and we get to celebrate making it two thirds of the way through the program. It is times like this that make Teaching worth it."
          }
        ]
      },
      sd: {
        code: 'sd',
        name: 'Software Development',
        articles: []
      },
      cy: {
        code: 'cy',
        name: 'Cybersecurity',
        articles: []
      },
      ux: {
        code: 'ux',
        name: 'UX/UI',
        articles: []
      }
    }
  })

  useEffect(() => {
    // fetch latest tribune
  }, [])

  useEffect(() => {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      setEmail(localStorage.getItem('email'))
      setAdmin(localStorage.getItem('role') === 'admin')
      setToken(localToken)
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
                <h2 id="date">{tribune?.date}</h2>
              </div>
              <div className="info-spacer"></div>
              <div id="info-line2">
                {tribune.title ? <h2 id="title">{tribune?.title}</h2> : null}
              </div>
            </div>
            <Tribune content={tribune.content} intro={tribune.intro} outro={tribune.outro} />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>

      
    </div>
  )
}

export default App
